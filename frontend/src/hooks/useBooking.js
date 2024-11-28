import { useState, useEffect } from 'react';
import { getBookings } from '../api/bookings';

const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((response) => setBookings(response.data));
  }, []);

  return bookings;
};

export default useBookings;
