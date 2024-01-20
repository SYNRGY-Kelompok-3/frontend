import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAuth } from "src/services/axios";
import { PAGE_SIZE } from "src/constants";
export interface ITicket {
  airlines: {
    id: number;
    pathLogo: string;
    airline: string;
  };
  arrivedTime: Date;
  created_date: Date;
  destinationAirport: string;
  destinationCity: string;
  discountPrice: string;
  duration: string;
  flightNumber: string;
  freeMeal: string | boolean;
  flightTime: Date;
  gate: string;
  id: number;
  isDiscount: string | boolean;
  luggage: string;
  originAirport: string;
  originCity: string;
  passengerClass: string;
  price: number;
  transit: string;
  updated_date: Date;
}

export interface ITicketState {
  isLoading: boolean;
  isError: boolean;
  data: unknown | null | Array<ITicket>;
  page: number;
  size: number;
}

export const fetchTicketList = createAsyncThunk("fetchTicketList", async () => {
  const res = await axiosAuth.get(`/flight/listFlights?page=0&size=5`);
  return res?.data?.data?.content;
});

const initialState: ITicketState = {
  isLoading: false,
  isError: false,
  data: [] || null,
  page: 0,
  size: PAGE_SIZE,
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
