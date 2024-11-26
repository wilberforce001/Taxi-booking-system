import React, { useState } from 'react';

function App() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation,setDropoffLocation] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const bookTaxi = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Check if all fields are filled
    if (!pickupLocation || !dropoffLocation || !passengerName) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/book-taxi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pickupLocation, dropoffLocation, passengerName}), 
      });

      const data = await response.json();

      if (response.ok) {
        // Success message from backend
        setSuccess(data.message);
        // Clear form after successful booking 
        setPickupLocation('');
        setDropoffLocation('');
        setPassengerName('');
      } else {
        //Error message from backend 
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong! Please try again later.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Book a Taxi</h1>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}

      <input
        type='text'
        placeholder='Enter Pickup Location'
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Dropoff Location"
        value={dropoffLocation}
        onChange={(e) => setDropoffLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Passenger Name"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
      />
      <button onClick={bookTaxi} disabled={loading}>
        {loading ? 'Booking...' : 'Book Taxi'}
      </button>
    </div>
  )
}

export default App;