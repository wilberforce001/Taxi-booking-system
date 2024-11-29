import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global components
import Navbar from './components/Navbar';

// Import pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import DriverPage from './pages/DriverPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div
        style={{
          display: 'flex',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Include Navbar with state */}
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
