// Modify this file to configure store and reducer
import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./seatSlice/slice";
import ticketReducer from "./ticketSlice/slice";
import forgotPasswordReducer from "./authSlice/forgotPasswordFlow";
export const store = configureStore({
  reducer: {
    seat: seatReducer,
    ticket: ticketReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
