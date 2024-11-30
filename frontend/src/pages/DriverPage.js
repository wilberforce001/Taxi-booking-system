import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const DriverPage = () => {
  const [drivers, setDrivers] = useState([]); // State to hold drivers data
  const [loading, setLoading] = useState(true); // Loading state for data fetch

  // Fetch drivers from backend on component mount
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/drivers'); // Update with your backend URL
        setDrivers(response.data); // Set fetched drivers to state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching drivers:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchDrivers();
  }, []); // Empty array ensures this runs only on component mount

  if (loading) {
    return <div>Loading drivers...</div>; // Show loading state
  }

  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="display-4">Our Professional Drivers</h1>
        <p className="lead text-muted">Meet the drivers who will take you to your destination with care.</p>
      </header>

      {/* Driver List Section */}
      <section>
        <h2 className="h3 mb-4">Available Drivers</h2>
        <div className="row">
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={`card shadow-sm ${driver.status === 'Online' ? 'border-success' : 'border-secondary'}`}>
                  <div className="card-body">
                    <h5 className="card-title">{driver.name}</h5>
                    <p className="card-text">Vehicle: {driver.vehicle}</p>
                    <p className="card-text">
                      Status: <span className={driver.status === 'Online' ? 'text-success' : 'text-danger'}>{driver.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No drivers available at the moment.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DriverPage;
