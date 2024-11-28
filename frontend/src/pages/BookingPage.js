import React, { useState } from 'react';

const BookingPage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const bookTaxi = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

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
        body: JSON.stringify({ pickupLocation, dropoffLocation, passengerName }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setPickupLocation('');
        setDropoffLocation('');
        setPassengerName('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">Book a Taxi</h1>
              
              {/* Error and Success Messages */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              {/* Pickup Location Input */}
              <div className="form-group mb-3">
                <input
                  type="text"
                  id="pickupLocation"
                  className="form-control"
                  placeholder="Enter Pickup Location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
              </div>

              {/* Dropoff Location Input */}
              <div className="form-group mb-3">
                <input
                  type="text"
                  id="dropoffLocation"
                  className="form-control"
                  placeholder="Enter Dropoff Location"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                />
              </div>

              {/* Passenger Name Input */}
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="passengerName"
                  className="form-control"
                  placeholder="Enter Passenger Name"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                />
              </div>

              {/* Book Taxi Button */}
              <button
                className="btn btn-primary w-100"
                onClick={bookTaxi}
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Book Taxi'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
