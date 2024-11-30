import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vehicle: { type: String, required: true },
  licenseNumber: { type: String, required: true }, 
  status: { type: String, required: true },
});

const Driver = mongoose.model('Driver', driverSchema);  

export default Driver;
