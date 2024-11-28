import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const bookTaxi = async (bookingDetails) => {
  return axios.post(`${API_URL}/book-taxi`, bookingDetails);
};

export const getBookings = async () => {
  return axios.get(`${API_URL}/bookings`);
};
