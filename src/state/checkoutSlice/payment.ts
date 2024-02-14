import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosApi } from "src/services/axios";
import { CHECKOUT_FLOW } from "src/constants/";
interface IPayment {
  booking: {
    id: number;
  };
  bankPembayaran: string;
  namaRekening: string;
  nomorRekening: string;
  masaBerlaku: string;
  cvvCvn: string;
}

interface IPaymentState extends IPayment {
  // general state
  isLoading: boolean;
  isError: boolean;
  data: unknown | null;
  flow: number;
}

const initialState: IPaymentState = {
  booking: {
    id: 0,
  },
  bankPembayaran: "",
  namaRekening: "",
  nomorRekening: "",
  masaBerlaku: "",
  cvvCvn: "",
  isLoading: false,
  isError: false,
  data: null,
  flow: CHECKOUT_FLOW.FILL_PAYMENT_METHOD,
};

export const handleProcessPayment = createAsyncThunk("handleProcessPayment", async (payload: IPayment) => {
  const res = await axiosApi.put(`booking/processPayment`, payload);
  return res.data;
});

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    setBankPembayaran: (state, action: PayloadAction<string>) => {
      state.bankPembayaran = action.payload;
    },
    setNamaRekening: (state, action: PayloadAction<string>) => {
      state.namaRekening = action.payload;
    },
    setNomorRekening: (state, action: PayloadAction<string>) => {
      state.nomorRekening = action.payload;
    },
    setMasaBerlaku: (state, action: PayloadAction<string>) => {
      state.masaBerlaku = action.payload;
    },
    setCvv: (state, action: PayloadAction<string>) => {
      state.cvvCvn = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleProcessPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleProcessPayment.fulfilled, (state) => {
        state.flow = CHECKOUT_FLOW.INVOICE_SUMMARY;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleProcessPayment.rejected, (state) => {
        state.flow = CHECKOUT_FLOW.INVOICE_SUMMARY;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setBankPembayaran, setNomorRekening, setMasaBerlaku, setCvv, setNamaRekening, resetState } =
  paymentSlice.actions;

export default paymentSlice.reducer;
