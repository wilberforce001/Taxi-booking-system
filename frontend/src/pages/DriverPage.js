import React from 'react';

const DriverPage = () => {
  const drivers = [
    { name: 'John Doe', vehicle: 'Toyota Camry', status: 'Online' },
    { name: 'Jane Smith', vehicle: 'Honda Civic', status: 'Offline' },
    { name: 'Carlos Vega', vehicle: 'Ford Focus', status: 'Online' },
  ];

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
          {drivers.map((driver, index) => (
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default DriverPage;
