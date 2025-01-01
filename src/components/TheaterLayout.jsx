import React from 'react';
import { useSelector } from 'react-redux';
import { selectSeats } from '../slices/seatsSlice';
import PlatinumSeats from './SeatTypes/PlatinumSeats';
import ClassicSeats from './SeatTypes/ClassicSeats';
import GoldSeats from './SeatTypes/GoldSeats';

const TheaterLayout = () => {
  const seats = useSelector(selectSeats);

  return (
    <div>
      <PlatinumSeats seats={seats[0]} />
      <ClassicSeats seats={seats[1]} />
      <GoldSeats seats={seats[2]} />
    </div>
  );
};

export default TheaterLayout;
