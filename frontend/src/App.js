import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global components
import Navbar from './components/Navbar';

// Import pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import DriverPage from './pages/DriverPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Include Navbar component */}
        <Navbar />
        
        {/* Define Routes */}
        <main>
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
