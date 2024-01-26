import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FORGOT_PWD_FLOW } from "src/constants";
import { axiosAuth } from "src/services/axios";

const FORGOT_PWD_PATH_URL = {
  CHECK_USER: "v1/forget-password/send",
  VALIDATE_OTP: "v1/forget-password/validate",
  CHANGE_PASSWORD: "v1/forget-password/change-password",
};

interface ForgotPasswordState {
  email: string;
  emailError: string | null;
  otp: string;
  otpError: string;
  newPassword: string;
  confirmNewPassword: string;
  resetPasswordError: string;
  flow: string;
  // general state
  isLoading: boolean;
  isError: boolean;
  data: unknown | null;
}

const initialState: ForgotPasswordState = {
  email: "",
  otp: "",
  otpError: "",
  newPassword: "",
  confirmNewPassword: "",
  resetPasswordError: "",
  flow: FORGOT_PWD_FLOW.EMAIL_INPUT,
  emailError: null,
  isLoading: false,
  isError: false,
  data: null,
};

export const handleCheckUserExistance = createAsyncThunk(
  "handleCheckUserExistance",
  async (email: string) => {
    const res = await axiosAuth.post(FORGOT_PWD_PATH_URL.CHECK_USER, { email });
    return res.data;
  }
);

export const handleValidateOtp = createAsyncThunk("handleValidateOtp", async (otp: string) => {
  const res = await axiosAuth.post(FORGOT_PWD_PATH_URL.VALIDATE_OTP, { otp });
  return res.data;
});

export const handleResetNewPassword = createAsyncThunk(
  "handleResetNewPassword",
  async (payload: { otp: string; email: string; newPassword: string; confirmNewPassword: string }) => {
    const res = await axiosAuth.post(FORGOT_PWD_PATH_URL.CHANGE_PASSWORD, payload);
    return res.data;
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPasswordSlice",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setFlow: (state, action: PayloadAction<string>) => {
      state.flow = action.payload;
    },
    setEmailError: (state, action: PayloadAction<string | null>) => {
      state.emailError = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    setConfirmNewPassword: (state, action: PayloadAction<string>) => {
      state.confirmNewPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // handleCheckUserExistance
      .addCase(handleCheckUserExistance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleCheckUserExistance.fulfilled, (state, { payload }) => {
        const { message, status } = payload;
        if (status === 200) {
          state.flow = FORGOT_PWD_FLOW.CHECK_EMAIL;
          state.emailError = null;
        } else {
          state.emailError = message;
        }
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleCheckUserExistance.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      // handleValidateOtp
      .addCase(handleValidateOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleValidateOtp.fulfilled, (state, { payload }) => {
        const { message, status } = payload;
        if (status === 200) {
          state.flow = FORGOT_PWD_FLOW.RESET_PASSWORD;
        } else {
          state.otpError = message;
        }
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleValidateOtp.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      // handle reset new password
      .addCase(handleResetNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleResetNewPassword.fulfilled, (state, { payload }) => {
        const { message, status } = payload;
        if (status === 200) {
          state.flow = FORGOT_PWD_FLOW.END_FLOW;
        } else {
          state.resetPasswordError = message;
        }
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(handleResetNewPassword.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setEmail, setOtp, setFlow, setEmailError, setNewPassword, setConfirmNewPassword } =
  forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
