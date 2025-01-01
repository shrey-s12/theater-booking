import React from 'react';
import { useDispatch } from 'react-redux';
import { seatSelection } from '../../slices/seatsSlice';

const Seat = ({ seat, index }) => {
  const dispatch = useDispatch();

  // Handle seat click for selecting
  const handleSeatClick = () => {
    if (seat.seatStatus === 'available' || seat.seatStatus === 'selected') {
      dispatch(seatSelection({ seat, category: seat.category, index }));
    }
  };


  // Dynamic class for seat status
  const getSeatClass = () => {
    if (seat.seatStatus === 'available') return 'bg-white border-green-500 hover:bg-gray-100';
    if (seat.seatStatus === 'selected') return 'bg-green-500 text-white';
    if (seat.seatStatus === 'booked') return 'bg-gray-200 text-gray-500 cursor-not-allowed';
    return '';
  };

  return (
    <div
      key={index}
      onClick={handleSeatClick}
      className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer ${getSeatClass()}`}
    >
      {index}
    </div>
  );
};

export default Seat;
