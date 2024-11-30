// Endpoint for fetching available drivers
app.get('/available-drivers', async (req, res) => {
    try {
      const availableDrivers = await Driver.find({ isAvailable: true });
      res.status(200).json(availableDrivers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });