import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAuth } from "src/services/axios";
export const fetchTicketList = createAsyncThunk("fetchTicketList", async () => {
  const res = await axiosAuth.get(`/flight/listFlights?page=0&size=5`);
  console.log(res, "hasil");
  return res?.data?.data?.content;
});

export interface TicketState {
  isLoading: boolean;
  isError: boolean;
  data: unknown | undefined | Array<[]>;
}

const initialState: TicketState = {
  isLoading: false,
  isError: false,
  data: [],
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTicketList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTicketList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTicketList.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default ticketSlice.reducer;
