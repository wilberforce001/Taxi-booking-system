// This page serves as the Admin Dashboard, where links 
// to admin-only actions like registering drivers are provided.

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/register-driver">Register a New Driver</Link>
        </li>
        <li className="list-group-item">
          <Link to="/manage-drivers">Manage Drivers</Link>
        </li>
        {/* Add other admin functions here */}
      </ul>
    </div>
  );
};

export default AdminDashboardPage;
