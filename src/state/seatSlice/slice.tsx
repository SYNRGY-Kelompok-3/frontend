// Handles the state of seats and total price
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { SeatProps } from "src/components/organisms/SeatLists";

interface SeatState {
  totalPrice: number;
  seatNumbers: string[];
}

const initialState: SeatState = {
  totalPrice: 0,
  seatNumbers: [],
};

const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    setSeats: (state, action: PayloadAction<SeatProps[]>) => {
      state.totalPrice = action.payload.reduce((total, seat) => total + (seat.price || 0), 0);
      state.seatNumbers = action.payload.map((seat) => seat.seat + seat.row);
    },
  },
});

export const { setSeats } = seatSlice.actions;
export default seatSlice.reducer;
