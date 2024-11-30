import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Import global components
import Navbar from './components/Navbar';

// Import pages
import HomePage from './pages/user/HomePage';
import BookingPage from './pages/BookingPage';
import DriverPage from './pages/DriverPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import RegisterDriverPage from './pages/admin/RegisterDriverPage';
import AdminRoute from './components/AdminRoute';
import UserLoginPage from './pages/user/UserLoginPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import RegisterUserPage from './pages/user/RegisterUserPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // Store the role of the logged-in user
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Store login status

  return (
    <Router>
      <AppContent
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        userRole={userRole}
        setUserRole={setUserRole}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </Router>
  );
};

const AppContent = ({
  isSidebarOpen,
  setIsSidebarOpen,
  userRole,
  setUserRole,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    setIsLoggedIn(false); // Update login status
    setUserRole(null); // Reset user role
    localStorage.removeItem('authToken'); // Remove any stored auth token (or session storage)
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div
      style={{
        display: 'flex',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Include Navbar with state */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        userRole={userRole}
        logout={logout}
        isLoggedIn={isLoggedIn}
      />

      {/* Main content area */}
      <main
        style={{
          marginLeft: isSidebarOpen ? '250px' : '60px', // Adjust based on sidebar state
          transition: 'margin-left 0.3s ease',
          width: '100%',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-taxi" element={<BookingPage />} />
          <Route path="/drivers" element={<DriverPage />} />
          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute userRole={userRole}> 
                <AdminDashboardPage />
              </AdminRoute>
            } 
          /> 
          <Route
            path="/register-driver"
            element={
              <AdminRoute userRole={userRole}>
                <RegisterDriverPage />
              </AdminRoute>
            }
          />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path='/register' element={<RegisterUserPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
