import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4">Welcome to Our Taxi Service</h1>
        <p className="lead text-muted">Your reliable ride anytime, anywhere.</p>
      </header>

      {/* Features Section */}
      <section className="features mb-5">
        <h2 className="h3 mb-4">Why Choose Us?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle text-success"></i> 24/7 Availability
          </li>
          <li className="list-group-item">
            <i className="bi bi-check-circle text-success"></i> Professional Drivers
          </li>
          <li className="list-group-item">
            <i className="bi bi-check-circle text-success"></i> Comfortable and Safe Rides
          </li>
        </ul>
      </section>

        {/* Links Section */}
        <div className="text-center mb-5">
          <Link to="/login" className="btn btn-primary mx-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary mx-2">
            Register
          </Link>
      </div>

      {/* Footer Section */}
      <footer className="text-center">
        <p>&copy; 2024 Taxi Service</p>
      </footer>
    </div>
  );
};

export default HomePage;
