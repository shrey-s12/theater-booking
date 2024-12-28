import React from 'react';
import TheaterLayout from '../components/TheaterLayout';
import Summary from '../components/Summary';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-5">Theater Booking</h1>
      <TheaterLayout />
      <Summary />
    </div>
  );
};

export default BookingPage;
