import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosApi } from "src/services/axios";
import { CHECKOUT_FLOW } from "src/constants/";
type TTitle = "Tuan" | "Nyonya" | "Nona" | "";

interface ICheckout {
  firstName: string;
  lastName: string;
  title: TTitle;
  phoneNumber: number;
  email: string;
  isOrderSameAsPassenger: boolean;
  firstNamePassenger: string;
  lastNamePassenger: string;
  titlePassenger: TTitle;
  // general state
  isLoading: boolean;
  isError: boolean;
  data: unknown | null;
  flow: number;
}

interface IBookingDetail {
  flight: {
    id: number;
  };
  customerName: string;
  identityNumber: string;
  seatNumber?: string;
  totalSeatPrice?: number;
  category: "adult" | "child" | "infant";
}
export interface IBooking {
  customer: {
    id: number;
  };
  listBookingDetail: IBookingDetail[];
}

const initialState: ICheckout = {
  firstName: ``,
  lastName: ``,
  title: `Tuan`,
  phoneNumber: 0,
  email: ``,
  isOrderSameAsPassenger: false,
  firstNamePassenger: ``,
  lastNamePassenger: ``,
  titlePassenger: "Tuan",
  isLoading: false,
  isError: false,
  data: null,
  flow: CHECKOUT_FLOW.FILL_IDENTITY,
};

export const handleCheckout = createAsyncThunk("handleCheckout", async (payload: IBooking) => {
  const res = await axiosApi.post(`booking/saveWithDetails`, payload);
  return res.data;
});

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setTitle: (state, action: PayloadAction<TTitle>) => {
      state.title = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<number>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setOrderAsSamePassenger: (state, action: PayloadAction<boolean>) => {
      state.isOrderSameAsPassenger = action.payload;
    },
    setFirstNamePassenger: (state, action: PayloadAction<string>) => {
      state.firstNamePassenger = action.payload;
    },
    setLastNamePassenger: (state, action: PayloadAction<string>) => {
      state.lastNamePassenger = action.payload;
    },
    setTitlePassenger: (state, action: PayloadAction<TTitle>) => {
      state.titlePassenger = action.payload;
    },
    setFlow: (state, action: PayloadAction<number>) => {
      state.flow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleCheckout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleCheckout.fulfilled, (state) => {
        state.flow = CHECKOUT_FLOW.FILL_PAYMENT_METHOD;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleCheckout.rejected, (state) => {
        state.flow = CHECKOUT_FLOW.FILL_PAYMENT_METHOD;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const {
  setFirstName,
  setLastName,
  setTitle,
  setPhoneNumber,
  setEmail,
  setOrderAsSamePassenger,
  setFirstNamePassenger,
  setLastNamePassenger,
  setTitlePassenger,
  setFlow,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
