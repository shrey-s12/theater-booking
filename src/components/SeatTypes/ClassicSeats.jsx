import React from 'react';
import Seat from './Seat';

const ClassicSeats = ({ seats }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-center mb-4">Classic Seats</h2>
            <div className="grid grid-cols-10 gap-2 w-[32%] mx-auto justify-center">
                {seats.map((seat, index) => (
                    <Seat key={index} seat={seat} index={index+1} />
                ))}
            </div>
        </div>
    );
};

export default ClassicSeats;
