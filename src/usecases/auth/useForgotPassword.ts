import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { FORGOT_PWD_FLOW } from "src/constants";

import {
  handleCheckUserExistance as fetchHandleCheckUserExistance,
  setEmail,
  setEmailError,
  setFlow,
} from "src/state/authSlice/forgotPasswordFlow";
import { useNavigate } from "react-router-dom";

export const useForgotPassword = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { email, emailError, flow, isLoading } = useSelector((state: RootState) => state.forgotPassword);

  const navigate = useNavigate();

  const handleCheckEmailClick = () => {
    dispatch(setFlow(FORGOT_PWD_FLOW.INPUT_OTP));
    window.open("https://mail.google.com", "_blank");
  };

  const onRedirectLogin = () => {
    navigate("/login");
    dispatch(setFlow(FORGOT_PWD_FLOW.EMAIL_INPUT));
  };

  const handleCheckUserExistance = async () => {
    dispatch(fetchHandleCheckUserExistance(email));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setEmail(value));
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      dispatch(setEmailError("Mohon masukkan alamat email yang valid"));
    } else {
      dispatch(setEmailError(""));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailError) return;
    const emailValue = { email };
    if (!emailValue) return;
    handleCheckUserExistance();
  };

  return {
    handleSubmit,
    inputRef,
    handleChange,
    emailError,
    flow,
    isLoading,
    handleCheckEmailClick,
    onRedirectLogin,
    email,
  };
};
