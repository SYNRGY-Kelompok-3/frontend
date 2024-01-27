import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { handleValidateOtp as fetchHandleValidateOtp } from "src/state/authSlice/forgotPasswordFlow";

export const useOtp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { flow, otpError } = useSelector((state: RootState) => state.forgotPassword);

  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const inputId = target.id;
    const inputIndex = parseInt(inputId.split("otpInput")[1]);
    if (event.key === "Backspace") {
      setOtpValues((prevValues) => {
        const updatedValues = [...prevValues];
        if (inputIndex > 0) {
          updatedValues[inputIndex - 1] = "";
          const prevInput = document.getElementById(`otpInput${inputIndex - 1}`) as HTMLInputElement;
          if (prevInput) {
            prevInput.focus();
          }
        }
        return updatedValues;
      });
    } else if (event.key.match(/^[0-9]$/)) {
      setOtpValues((prevValues) => {
        const updatedValues = [...prevValues];
        if (updatedValues[inputIndex] !== "") {
          updatedValues[inputIndex] = event.key;
          const nextInput = document.getElementById(`otpInput${inputIndex + 1}`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
          }
        }
        return updatedValues;
      });
    }
  };

  const handleValidateOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const otp = otpValues.map((_, index) => data.get(`otpInput${index}`) as string);
    await dispatch(fetchHandleValidateOtp(otp.join("")));
  };

  const handleChangeInputOtp = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setOtpValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = event.target.value;
      return updatedValues;
    });
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
