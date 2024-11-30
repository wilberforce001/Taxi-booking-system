import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = ({ isSidebarOpen, toggleSidebar, userRole, logout, isLoggedIn }) => {
  return (
    <nav
      style={{
        backgroundColor: '#343a40',
        color: '#fff',
        width: isSidebarOpen ? '250px' : '60px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isSidebarOpen ? 'flex-start' : 'center',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '1.5rem',
          marginTop: '10px',
          marginLeft: isSidebarOpen ? '20px' : '0', // Adjust toggle button position
          cursor: 'pointer',
          alignSelf: isSidebarOpen ? 'flex-start' : 'center',
        }}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Navigation links */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '20px 0 0 0',
          width: '100%',
          textAlign: isSidebarOpen ? 'left' : 'center', // Adjust text alignment
        }}
      >
        {/* User Links */}
        <li style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px', // Add spacing between icon and text
              width: '100%',
              justifyContent: isSidebarOpen ? 'flex-start' : 'center', // Center icon when collapsed
            }}
          >
            🏠 {/* Icon */}
            {isSidebarOpen && <span>Home</span>}
          </Link>
        </li>

        {/* Admin Links */}
        {userRole === 'admin' && (
          <>
            <li style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
              <Link
                to="/admin-dashboard"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                }}
              >
                🛠 {/* Icon */}
                {isSidebarOpen && <span>Admin Dashboard</span>}
              </Link>
            </li>
            <li style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
              <Link
                to="/register-driver"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                }}
              >
                ✍️ {/* Icon */}
                {isSidebarOpen && <span>Register Driver</span>}
              </Link>
            </li>
          </>
        )}

        {/* Logout Button */}
        {isLoggedIn && (
          <li style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
            <button
              onClick={logout}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                padding: '10px',
                cursor: 'pointer',
                width: '100%',
                justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              🚪 {/* Logout Icon */}
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
