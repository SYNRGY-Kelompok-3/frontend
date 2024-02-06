import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosAuth } from "src/services/axios";
import { ITicketListParams, ITicket, TTransit, TCity, TPassengerClass } from "src/constants";
import { PAGE_SIZE } from "src/constants";

export interface ITicketState extends ITicketListParams {
  isLoading: boolean;
  isError: boolean;
  data: unknown | null | Array<ITicket>;
}

const initialState: ITicketState = {
  isLoading: false,
  isError: false,
  data: [] || null,
  page: 0,
  size: PAGE_SIZE,
  startDateStr: ``,
  endDateStr: ``,
  isDiscount: false,
  freeMeal: false,
  transit: "langsung",
  originCity: "",
  destinationCity: "",
  passengerClass: "economy",
};

// type Action =
//   | { type: "FETCH_TICKET_START"; payload: boolean }
//   | { type: "FETCH_TICKET_SUCCESS"; payload: ITicket[] }
//   | { type: "FETCH_TICKET_FAILURE"; payload: boolean }
//   | { type: "SET_START_DATE"; payload: string }
//   | { type: "SET_END_DATE"; payload: string }
//   | { type: "SET_TRANSIT"; payload: string }
//   | { type: "SET_ORIGIN_CITY"; payload: string }
//   | { type: "SET_DESTINATION_CITY"; payload: string }

// export const ticketReducer = (state: ITicketState, action: Action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "FETCH_TICKET_START":
//       return { ...state, isLoading: true };
//     case "FETCH_TICKET_SUCCESS":
//       return { ...state, isLoading: false, data: payload, isError: false };
//     case "FETCH_TICKET_FAILURE":
//       return { ...state, isLoading: false, isError: true };
//     case "SET_START_DATE":
//       return { ...state, startDateStr: payload };
//     case "SET_END_DATE":
//       return { ...state, endDateStr: payload };
//     case "SET_TRANSIT":
//       return { ...state, transit: payload };
//     case "SET_ORIGIN_CITY":
//       return { ...state, originCity: payload };
//     case "SET_DESTINATION_CITY":
//       return { ...state, destinationCity: payload };
//     default:
//       return state;
//   }
// };

export const fetchTicketList = createAsyncThunk("fetchTicketList", async (params: ITicketListParams) => {
  const { page, size, startDateStr, endDateStr, originCity, destinationCity } = params;
  const url: string = `/flight/listFlights?page=${page}&size=${size}&startDateStr=${startDateStr}&endDateStr=${endDateStr}&originCity=${originCity}&destinationCity=${destinationCity}`;
  const res = await axiosAuth.get(url);
  return res?.data?.data?.content;
});

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDateStr = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDateStr = action.payload;
    },
    setTransit: (state, action: PayloadAction<TTransit>) => {
      state.transit = action.payload;
    },
    setOriginCity: (state, action: PayloadAction<TCity>) => {
      state.originCity = action.payload;
    },
    setDestinationCity: (state, action: PayloadAction<TCity>) => {
      state.destinationCity = action.payload;
    },
    setPassengerClass: (state, action: PayloadAction<TPassengerClass>) => {
      state.passengerClass = action.payload;
    },
  },
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
export const { setStartDate, setEndDate, setTransit, setOriginCity, setDestinationCity, setPassengerClass } =
  ticketSlice.actions;
export default ticketSlice.reducer;
