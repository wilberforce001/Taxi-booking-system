// This is a higher-order component (HOC) to protect admin-only routes.
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ userRole, children }) => {
  if (userRole !== 'admin') {
    return <Navigate to="/" />; // Redirect non-admins to Home
  }
  return children;
};

export default AdminRoute;
