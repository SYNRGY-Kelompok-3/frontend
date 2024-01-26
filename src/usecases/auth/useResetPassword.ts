import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { handleResetNewPassword as fetchHandleResetNewPassword } from "src/state/authSlice/forgotPasswordFlow";

export const useResetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { otp, email } = useSelector((state: RootState) => state.forgotPassword);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>("");

  const handleResetNewPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordError) return;
    await dispatch(
      fetchHandleResetNewPassword({ otp, email, newPassword: password, confirmNewPassword: confirmPassword })
    );
  };

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError("Password must contain at least one capital letter.");
    } else if (!/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      setPasswordError("Password must contain at least one lowercase letter and one number.");
    } else {
      setPasswordError(null);
    }
  };

  const handleChangeConfirmNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);

    // Validate the confirm password
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  return {
    handleResetNewPassword,
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    handleChangeNewPassword,
    handleChangeConfirmNewPassword,
    setPassword,
    setConfirmPassword,
  };
};
