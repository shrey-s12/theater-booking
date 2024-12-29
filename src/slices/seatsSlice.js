import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seatingData: [
    {
      category: 'Platinum',
      price: 300,
      seats: Array.from({ length: 10 }, (_, i) => `P${i + 1}`),
    },
    {
      category: 'Gold',
      price: 200,
      seats: Array.from({ length: 20 }, (_, i) => `G${i + 1}`),
    },
    {
      category: 'Silver',
      price: 100,
      seats: Array.from({ length: 20 }, (_, i) => `S${i + 1}`),
    },
  ],
  selectedSeats: [],
  bookedSeats: JSON.parse(localStorage.getItem('bookedSeats')) || [],
};

const seatsSlice = createSlice({
  name: 'seatsNameInSlice',
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      if (!state.bookedSeats.includes(action.payload.seat)) {
        state.selectedSeats.push(action.payload);
      }
    },
    deselectSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.seat !== action.payload.seat
      );
    },
    confirmBooking: (state) => {
      state.bookedSeats = [
        ...state.bookedSeats,
        ...state.selectedSeats.map((seat) => seat.seat),
      ];
      state.selectedSeats = [];
      localStorage.setItem('bookedSeats', JSON.stringify(state.bookedSeats));
    },
  },
});

export const { selectSeat, deselectSeat, confirmBooking } = seatsSlice.actions;
export default seatsSlice.reducer;
