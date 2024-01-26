import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { handleValidateOtp as fetchHandleValidateOtp, setOtp } from "src/state/authSlice/forgotPasswordFlow";

export const useOtp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { otp, flow, otpError } = useSelector((state: RootState) => state.forgotPassword);

  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace") {
      setOtpValues((prevValues) => {
        const updatedValues = [...prevValues];
        const lastNonEmptyIndex = updatedValues.findIndex((value) => value !== "");

        if (lastNonEmptyIndex !== -1 && lastNonEmptyIndex > index) {
          updatedValues[lastNonEmptyIndex] = "";
          updatedValues.pop();
          const nextInput = document.getElementById(`otpInput${lastNonEmptyIndex}`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
          }
        }

        return updatedValues;
      });
    } else if (event.key.match(/^[0-9]$/)) {
      setOtpValues((prevValues) => {
        const updatedValues = [...prevValues];
        if (updatedValues[index] === "") {
          updatedValues[index] = event.key;
          const nextInput = document.getElementById(`otpInput${index + 1}`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
          }
        }
        return updatedValues;
      });
    }
  };

  const handleValidateOtp = async () => {
    dispatch(fetchHandleValidateOtp(otp));
  };

  const handleChangeInputOtp = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setOtpValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = event.target.value;
      return updatedValues;
    });
    dispatch(setOtp(otpValues.join("")));
    console.log(otpValues.join(""), "nah nah");
  };

  return {
    handleChangeInputOtp,
    otpError,
    flow,
    handleValidateOtp,
    otpValues,
    handleKeyUp,
  };
};
