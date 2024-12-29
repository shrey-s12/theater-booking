import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeat, deselectSeat } from '../slices/seatsSlice';

const TheaterLayout = () => {
  const dispatch = useDispatch();
  const { seatingData, selectedSeats, bookedSeats } = useSelector((state) => state.seatsKeyInStore);

  const handleSeatClick = (seat, category, price) => {
    const seatData = { seat, category, price };

    if (selectedSeats.some((s) => s.seat === seat)) {
      dispatch(deselectSeat(seatData));
    } else {
      dispatch(selectSeat(seatData));
    }
  };

  return (
    <div className="space-y-5">
      {seatingData.map((section) => (
        <div key={section.category}>
          <h2 className="text-xl font-bold text-center mb-2">{section.category} (₹{section.price})</h2>
          <div className="grid grid-cols-10 gap-2 justify-center">
            {section.seats.map((seat) => (
              <div
                key={seat}
                className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer
                  ${
                    bookedSeats.includes(seat)
                      ? 'bg-red-500 text-white cursor-not-allowed'
                      : selectedSeats.some((s) => s.seat === seat)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                onClick={() =>
                  !bookedSeats.includes(seat) && handleSeatClick(seat, section.category, section.price)
                }
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheaterLayout;
