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


// Save bookings in a temporary array
let bookings = [];

// Route for taxi bookings
app.post('/book-taxi', (req, res) => {
  const { pickupLocation, dropoffLocation, passengerName } = req.body;

  // Basic validation
  if (!pickupLocation || !dropoffLocation || !passengerName) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Create a new booking object
  const newBooking = {
    id: bookings.length + 1,
    pickupLocation,
    dropoffLocation,
    passengerName,
    bookingTime: new Date(),
  };

  // Save the booking
  bookings.push(newBooking);

  // Respond with success
  res.status(201).json({ message: 'Taxi booked successfully!', booking: newBooking });
});

// Route to get all bookings (for debugging) - Useful to check if
// bookings are being correctly stored
app.get('/bookings', (req, res) => {
  res.json(bookings);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
