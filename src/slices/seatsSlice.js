import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    availableSeats: Array.from({ length: 50 }, (_, i) => i + 1), // Seat IDs 1-50
    selectedSeats: [],
    bookedSeats: JSON.parse(localStorage.getItem('bookedSeats')) || [],
};

const seatsSlice = createSlice({
    name: 'seatsNameInSlice',
    initialState,
    reducers: {
        selectSeat: (state, action) => {
            if (!state.bookedSeats.includes(action.payload) && !state.selectedSeats.includes(action.payload)) {
                state.selectedSeats.push(action.payload);
            }
        },
        deselectSeat: (state, action) => {
            state.selectedSeats = state.selectedSeats.filter((seat) => seat !== action.payload);
        },
        confirmBooking: (state) => {
            state.bookedSeats = [...state.bookedSeats, ...state.selectedSeats];
            state.selectedSeats = [];
            localStorage.setItem('bookedSeats', JSON.stringify(state.bookedSeats));
        },
    },
});

export const { selectSeat, deselectSeat, confirmBooking } = seatsSlice.actions;
export default seatsSlice.reducer;
