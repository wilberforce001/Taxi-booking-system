import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
}

mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log('MongoDB connection error:', err));

// Express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Define a Booking schema and model **globally**
const bookingSchema = new mongoose.Schema({
  pickupLocation: String,
  dropoffLocation: String,
  passengerName: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Route for taxi bookings
app.post('/book-taxi', async (req, res) => {
  try {
    const { pickupLocation, dropoffLocation, passengerName } = req.body;
    console.log('Received Booking:', req.body); // Log the received data

    // Basic validation
    if (!pickupLocation || !dropoffLocation || !passengerName) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
  
    // Create a new booking schema 
    const newBooking = new Booking({
      pickupLocation, 
      dropoffLocation, 
      passengerName, 
      date: Date.now()
    });
  
    // Save the booking to the database
    await newBooking.save(); 
    
    // Respond with success
    res.status(201).json({ message: 'Taxi booked successfully!', booking: newBooking });
  }
  catch (err) {
    console.error('Error saving booking:', err); // Log the error for debugging
    res.status(500).json({ message: 'Failed to book taxi', error: err.message });
  }

});

// Route to get all bookings (for debugging) - Useful to check if
// bookings are being correctly stored
app.get('/bookings', (req, res) => {
  res.json(Booking);
});

// Endpoint for fetching available drivers
app.get('/available-drivers', async (req, res) => {
  try {
    const availableDrivers = await Driver.find({ isAvailable: true });
    res.status(200).json(availableDrivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint for updating ride status
app.put('/update-ride-status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rideStatus } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { rideStatus },
      { new: true }
    );

    if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
}); 
