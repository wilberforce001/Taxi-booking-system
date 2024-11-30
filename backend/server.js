import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import bookingRoutes from './routes/booking';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
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

// Use the booking routes
app.use('/api', bookingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
}); 
