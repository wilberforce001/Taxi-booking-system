// The page to register new drivers, accessed through the Admin Dashboard.

import React, { useState } from 'react';

const RegisterDriverPage = () => {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const[licenseNumber, setLicenseNumber] = useState('');
  const [status, setStatus] = useState('Offline');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const registerDriver = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/drivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, vehicle, licenseNumber, status }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Driver registered successfully!');
        setName('');
        setVehicle('');
        setLicenseNumber('');
        setStatus('Offline');
      } else {
        setMessage(data.message || 'Failed to register driver.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Register Driver</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="vehicle">Vehicle</label>
        <input
          type="text"
          id="vehicle"
          className="form-control"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="licenseNumber">License Number</label>
        <input
          type="text"
          id="licenseNumber"
          className="form-control"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <button
        className="btn btn-primary"
        onClick={registerDriver}
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register Driver'}
      </button>
    </div>
  );
};

export default RegisterDriverPage;
