import axios from "axios";
import { axiosAuth } from "src/services/axios";
import { useUserData } from "src/state/userSlice/userData.store";
import { useState, useEffect, useRef } from "react";

let currentOtpIndex: number = 0;
function OtpHooks() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);

    setOtp(newOtp);
  };

  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOtpIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>, callback?: () => void) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${axiosAuth.defaults.baseURL}/v1/user-register/register-confirm-otp/${otp.join("")}`
      );

      if (response.status === 200) {
        callback && callback();
      } else {
        alert("OTP Tidak Valid");
      }

      return;
    } catch (error) {
      alert("OTP Tidak Valid");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(`${axiosAuth.defaults.baseURL}/v1/user-register/send-otp`, {
        username: useUserData.getState().userData.username,
      });

      console.log(response);
      if (response.status === 200) {
        alert("Kode OTP telah dikirim ulang");
      } else {
        alert("Kode OTP gagal dikirim ulang");
      }
    } catch (error) {
      console.log(error);
      alert("Kode OTP gagal dikirim ulang");
    }
  };

  return {
    handleOtpSubmit,
    handleResendOtp,
    handleOnChange,
    handleOnKeyDown,
    otp,
    inputRef,
    activeOtpIndex,
  };
}

export default OtpHooks;
