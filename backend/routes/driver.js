import express from 'express';
import Driver from '../models/Driver.js';

const router = express.Router();

// Route for registering a driver
router.post('/register-driver', verifyAdmin, async (req, res) => {
  try {
    const { name, vehicle, licenseNumber , status} = req.body;

    // Basic validation
    if (!name || !vehicle || !licenseNumber ) {
      return res.status(400).json({ message: 'Name, vehicle and license are required!' });
    }
    
    // Create a new driver
    const newDriver = new Driver({
      name,
      vehicle,
      licenseNumber,
      status: status || 'Offline', 
    }) 

    // Save the driver to the database
    await newDriver.save();

    res.status(201).json({ message: 'Driver registered successfully', driver: newDriver });
  } catch (err) {
    console.error('Error registering driver:', err);
    res.status(500).json({ message: 'Failed to register driver', error: err.message });
  }
});

// Route to get all drivers
router.get('/drivers', async (req, res) => {
    try {
      const drivers = await Driver.find();
      res.status(200).json(drivers);
    } catch (err) {
      console.error('Error fetching drivers:', err);
      res.status(500).json({ message: 'Failed to fetch drivers', error: err.message });
    }
  });

// Route for updating driver availability
router.put('/update-availability/:driverId', async (req, res) => {
  try {
    const { driverId } = req.params;
    const { isAvailable } = req.body;

    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    driver.isAvailable = isAvailable;
    await driver.save();

    res.status(200).json({ message: 'Driver availability updated', driver });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update driver availability', error: err.message });
  }
});

export default router;