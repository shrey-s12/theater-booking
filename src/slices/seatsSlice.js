import { createSlice } from '@reduxjs/toolkit';

const seats = [
    [
        { seatStatus: "available", category: "Platinum" }, // seatStatus can be "available", "booked", "selected"
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" },
        { seatStatus: "available", category: "Platinum" }
    ],
    [
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" },
        { seatStatus: "available", category: "Classic" }
    ],
    [
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" },
        { seatStatus: "available", category: "gold" }
    ]
]

const initialState = {
    seats: seats,
    selectedSeats: [],
};

const seatsSlice = createSlice({
    name: 'seatsNameInKey',
    initialState,
    reducers: {
        seatSelection: (state, action) => {
            const { seat, category, index } = action.payload;
            const selectedSeat = { seat, category };
            if (category === "Platinum") {
                const statusChange = state.seats[0][index - 1].seatStatus === "available" ? "selected" : "available";
                state.seats[0][index - 1].seatStatus = statusChange;
            } else if (category === "Classic") {
                const statusChange = state.seats[1][index - 1].seatStatus === "available" ? "selected" : "available";
                state.seats[1][index - 1].seatStatus = statusChange;
            } else {
                const statusChange = state.seats[2][index - 1].seatStatus === "available" ? "selected" : "available";
                state.seats[2][index - 1].seatStatus = statusChange;
            }
            console.log(initialState.seats)
            console.log(state.seats);
            console.log("seat", seat, "category", category, "index", index);
            state.selectedSeats.push(selectedSeat);

        },
    },
});

export const { seatSelection } = seatsSlice.actions;
export default seatsSlice.reducer;

export const selectSeats = state => state.seatsKeyInStore.seats;
