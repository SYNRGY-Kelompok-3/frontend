import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { handleResetNewPassword as fetchHandleResetNewPassword } from "src/state/authSlice/forgotPasswordFlow";

interface IState {
  password: string;
  confirmPassword: string;
  passwordError: string | null;
  confirmPasswordError: string | null;
  passwordVisible: boolean;
  confirmPasswordVisible: boolean;
}

type Action =
  | { type: "SET_PASSWORD_VISIBLE"; payload: boolean }
  | { type: "SET_CONFIRM_PASSWORD_VISIBLE"; payload: boolean }
  | { type: "SET_PASSWORD_VALUE"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD_VALUE"; payload: string }
  | { type: "SET_PASSWORD_ERROR"; payload: string | null }
  | { type: "SET_CONFIRM_PASSWORD_ERROR"; payload: string | null };

const resetPasswordReducer = (state: IState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PASSWORD_VISIBLE":
      return { ...state, passwordVisible: payload };
    case "SET_CONFIRM_PASSWORD_VISIBLE":
      return { ...state, confirmPasswordVisible: payload };
    case "SET_PASSWORD_VALUE":
      return { ...state, password: payload };
    case "SET_CONFIRM_PASSWORD_VALUE":
      return { ...state, confirmPassword: payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: payload };
    case "SET_CONFIRM_PASSWORD_ERROR":
      return { ...state, confirmPasswordError: payload };

    default:
      return state;
  }
};

export const useResetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { otp, email } = useSelector((state: RootState) => state.forgotPassword);
  const [state, dispatchAction] = useReducer<React.Reducer<IState, Action>>(resetPasswordReducer, {
    password: ``,
    confirmPassword: ``,
    passwordError: `` || null,
    confirmPasswordError: `` || null,
    passwordVisible: false,
    confirmPasswordVisible: false,
  });

  const onTogglePassword = (type?: string) => {
    type === "PASSWORD"
      ? dispatchAction({ type: "SET_PASSWORD_VISIBLE", payload: !state.passwordVisible })
      : dispatchAction({ type: "SET_CONFIRM_PASSWORD_VISIBLE", payload: !state.confirmPasswordVisible });
  };

  const handleResetNewPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.passwordError) return;
    await dispatch(
      fetchHandleResetNewPassword({
        otp,
        email,
        newPassword: state.password,
        confirmNewPassword: state.confirmPassword,
      })
    );
  };

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    dispatchAction({ type: "SET_PASSWORD_VALUE", payload: newPassword });
    if (newPassword.length < 8) {
      dispatchAction({ type: "SET_PASSWORD_ERROR", payload: "Password must be at least 8 characters long." });
    } else if (!/[A-Z]/.test(newPassword)) {
      dispatchAction({
        type: "SET_PASSWORD_ERROR",
        payload: "Password must contain at least one capital letter.",
      });
    } else if (!/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      dispatchAction({
        type: "SET_PASSWORD_ERROR",
        payload: "Password must contain at least one lowercase letter and one number.",
      });
    } else {
      dispatchAction({
        type: "SET_PASSWORD_ERROR",
        payload: null,
      });
    }
  };

  const handleChangeConfirmNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    dispatchAction({ type: "SET_CONFIRM_PASSWORD_VALUE", payload: confirmPassword });
    if (confirmPassword !== state.password) {
      dispatchAction({
        type: "SET_CONFIRM_PASSWORD_ERROR",
        payload: "Passwords do not match.",
      });
    } else {
      dispatchAction({
        type: "SET_CONFIRM_PASSWORD_ERROR",
        payload: null,
      });
    }
  };

  return {
    state,
    onTogglePassword,
    handleResetNewPassword,
    handleChangeNewPassword,
    handleChangeConfirmNewPassword,
  };
};
