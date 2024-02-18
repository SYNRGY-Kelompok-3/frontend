import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosAuth } from "src/services/axios";
import { ITicketListParams, ITicket, TTransit, TCity, TPassengerClass } from "src/constants";
import { PAGE_SIZE } from "src/constants";

export interface ITicketState extends ITicketListParams {
  isLoading: boolean;
  isLoadingLoadMore: boolean;
  isLoadingDetail: boolean;
  isError: boolean;
  data: Array<ITicket>;
  detailTicket: ITicket;
}

const initialState: ITicketState = {
  isLoading: false,
  isLoadingLoadMore: false,
  isLoadingDetail: false,
  isError: false,
  data: [] || null,
  page: 0,
  size: PAGE_SIZE,
  startDateStr: new Date(),
  endDateStr: new Date(),
  isDiscount: false,
  freeMeal: false,
  transit: "",
  originCity: "",
  destinationCity: "",
  passengerClass: "",
  airlines: ``,
  detailTicket: {
    airlines: {
      id: 0,
      pathLogo: ``,
      airline: ``,
    },
    arrivedTime: ``,
    created_date: ``,
    destinationAirport: ``,
    destinationCity: ``,
    discountPrice: ``,
    duration: ``,
    flightNumber: ``,
    freeMeal: false,
    flightTime: ``,
    gate: ``,
    id: 0,
    isDiscount: false,
    luggage: ``,
    originAirport: ``,
    originCity: ``,
    passengerClass: ``,
    price: 0,
    transit: ``,
    updated_date: ``,
  },
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

export const fetchTicketList = createAsyncThunk(
  "fetchTicketList",
  async (params: ITicketListParams & { isLoadMore: boolean }) => {
    const { page, size, startDateStr, originCity, destinationCity, airlines, transit } = params;
    const url: string = `/flight/listFlights?page=${page}&size=${size}&startDateStr=${startDateStr}&endDateStr=&originCity=${originCity}&destinationCity=${destinationCity}&airlines=${airlines}&transit=${transit}`;
    const res = await axiosAuth.get(url);
    return res?.data?.data?.content;
  }
);

export const fetchTicketDetail = createAsyncThunk("fetchTicketDetail", async (id: number) => {
  const url: string = `/flight/${id}`;
  const res = await axiosAuth.get(url);
  return res?.data?.data;
});

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date | string>) => {
      state.startDateStr = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | string>) => {
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
    setDetailTicket: (state, action: PayloadAction<ITicket>) => {
      state.detailTicket = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTicketList.pending, (state, action) => {
      if (action.meta.arg.isLoadMore) {
        state.isLoadingLoadMore = true;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchTicketList.fulfilled, (state, action) => {
      if (action.meta.arg.isLoadMore) {
        state.data = [...state.data, ...action.payload];
      } else if (Number(action.meta.arg.page) <= 0 || !action.meta.arg.isLoadMore) {
        state.data = action.payload;
      }
      state.isLoading = false;
      state.isLoadingLoadMore = false;
    });
    builder.addCase(fetchTicketList.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isLoadingLoadMore = false;
    });
    builder.addCase(fetchTicketDetail.pending, (state) => {
      state.isLoadingDetail = true;
    });
    builder.addCase(fetchTicketDetail.fulfilled, (state, action) => {
      state.isLoadingDetail = false;
      state.detailTicket = action.payload;
    });
    builder.addCase(fetchTicketDetail.rejected, (state) => {
      state.isError = true;
      state.isLoadingDetail = false;
    });
  },
});
export const {
  setStartDate,
  setEndDate,
  setTransit,
  setOriginCity,
  setDestinationCity,
  setPassengerClass,
  setDetailTicket,
  resetState,
} = ticketSlice.actions;
export default ticketSlice.reducer;
