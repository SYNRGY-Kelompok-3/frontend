import { useState } from "react";
import { AxiosError } from "axios";
import Api from "src/services/api";
import { STATUS_CODE } from "src/constants/common";

interface ErrorLogin {
  message?: string;
  color?: string;
  status?: string;
}

interface Login {
  access_token?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
  expires_in?: number;
  jti?: string;
}

function LoginHooks() {
  const { fetchLogin, fetchProfile } = Api();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [loginError, setLoginError] = useState<ErrorLogin>({});

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setEmailValidation(emailRegex.test(value));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordValidation(false);
      setPasswordMessage("Password Wajib Diisi!");
    } else {
      setPasswordValidation(true);
      setPasswordMessage("");
    }
  };

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError({
        message: "Email dan Password Wajib Diisi!",
        color: "text-red-500",
        status: STATUS_CODE[400],
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setLoginError({
        message: "Email Tidak Valid!",
        color: "text-red-500",
        status: STATUS_CODE[400],
      });
      return;
    }

    try {
      const response = (await fetchLogin(email, password)) as Login;
      if (response.access_token) {
        setLoginError({
          message: "Login Berhasil!",
          color: "text-lime-500",
          status: STATUS_CODE[200],
        });
        const userData = await fetchProfile(response.access_token);
        localStorage.setItem("token", response?.access_token);
        localStorage.setItem("userData", JSON.stringify(userData["data 2"]));
      } else {
        setLoginError({
          message: "Email atau Password Salah!",
          color: "text-red-500",
          status: STATUS_CODE[404],
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setLoginError({
          message: error.response?.data.message ?? "Login Gagal, Terjadi Kesalahan!",
          color: "text-red-500",
          status: STATUS_CODE[500],
        });
      }
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    passwordType,
    setPasswordType,
    emailValidation,
    setEmailValidation,
    passwordValidation,
    setPasswordValidation,
    passwordMessage,
    setPasswordMessage,
    loginError,
    setLoginError,
    handleEmail,
    handlePassword,
    togglePassword,
    handleSubmit,
  };
}

export default LoginHooks;
