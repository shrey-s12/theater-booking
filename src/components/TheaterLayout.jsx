import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeat, deselectSeat } from '../slices/seatsSlice';

const TheaterLayout = () => {
  const dispatch = useDispatch();
  const { availableSeats, selectedSeats, bookedSeats } = useSelector((state) => state.seats);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      dispatch(deselectSeat(seat));
    } else {
      dispatch(selectSeat(seat));
    }
  };

  return (
    <div className="grid grid-cols-10 gap-2 justify-center p-5">
      {availableSeats.map((seat) => (
        <div
          key={seat}
          className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer
            ${
              bookedSeats.includes(seat)
                ? 'bg-red-500 text-white cursor-not-allowed'
                : selectedSeats.includes(seat)
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          onClick={() => !bookedSeats.includes(seat) && handleSeatClick(seat)}
        >
          {seat}
        </div>
      ))}
    </div>
  );
};

export default TheaterLayout;