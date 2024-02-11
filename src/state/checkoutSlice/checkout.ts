import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosAuth } from "src/services/axios";
import { CHECKOUT_FLOW, TCheckoutFlow } from "src/constants/";
type TTitle = "Tuan" | "Nyonya" | "Nona" | "";

interface detailCheckout {
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

const initialState: detailCheckout = {
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

export const handleCheckoutPayment = createAsyncThunk(
  "handleCheckoutPayment",
  async (payload: {
    flight: {
      id: number;
    };
    booking: {
      id: number;
    };
    customerName: string;
    identityNumber: string;
    seatNumber: string;
    luggage: string;
  }) => {
    const res = await axiosAuth.post(`bookingDetail/save`, payload);
    return res.data;
  }
);

export const handleProcessPayment = createAsyncThunk(
  "handleProcessPayment",
  async (payload: {
    flight: {
      id: number;
    };
    booking: {
      id: number;
    };
    customerName: string;
    identityNumber: string;
    seatNumber: string;
    luggage: string;
  }) => {
    const res = await axiosAuth.post(`bookingDetail/save`, payload);
    return res.data;
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleCheckoutPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleCheckoutPayment.fulfilled, (state) => {
        state.flow = CHECKOUT_FLOW.FILL_PAYMENT_METHOD;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleCheckoutPayment.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(handleProcessPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleProcessPayment.fulfilled, (state) => {
        state.flow = CHECKOUT_FLOW.INVOICE_SUMMARY;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleProcessPayment.rejected, (state) => {
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
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
