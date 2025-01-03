import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmBooking } from '../slices/seatsSlice';

const Summary = () => {
  const dispatch = useDispatch();
  const { selectedSeats } = useSelector((state) => state.seatsKeyInStore);

  const totalPrice = selectedSeats.reduce((total, seat) => total + seat.price, 0);

  const handleConfirm = () => {
    dispatch(confirmBooking());
    alert('Booking confirmed!');
  };

  return (
    <div className="p-5 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-2">Selected Seats</h3>
      <ul className="mb-4">
        {selectedSeats.map((seat, index) => (
          <li key={index}>
            {seat.seat} ({seat.category}): ₹{seat.price}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-2">Total Price</h3>
      <p className="mb-4">₹{totalPrice}</p>
      <button
        onClick={handleConfirm}
        disabled={selectedSeats.length === 0}
        className={`px-4 py-2 rounded text-white font-bold ${
          selectedSeats.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Summary;
