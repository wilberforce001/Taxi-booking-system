import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  passengerName: { type: String, required: true },
  rideStatus: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
  date: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
