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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
}); 
