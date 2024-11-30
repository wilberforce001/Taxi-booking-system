import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Route for booking a taxi - receives the booking details from the frontend 
// and validates them then creates a new booking in the database.
router.post('/book-taxi', async (req, res) => {
  try {
    const { pickupLocation, dropoffLocation, passengerName } = req.body;
    console.log('Received Booking:', req.body);

    // Basic validation
    if (!pickupLocation || !dropoffLocation || !passengerName) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Create a new booking instance
    const newBooking = new Booking({
      pickupLocation,
      dropoffLocation,
      passengerName,
    });

    // Save the booking to the database
    await newBooking.save();

    res.status(201).json({ message: 'Taxi booked successfully!', booking: newBooking });
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).json({ message: 'Failed to book taxi', error: err.message });
  }
});

// Route to get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ message: 'Failed to fetch bookings', error: err.message });
  }
});

export default router;
