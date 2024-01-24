import { useState } from "react";
import axios, { AxiosError } from "axios";

import { axiosAuth } from "src/services/axios";
import { STATUS_CODE } from "src/constants/common";

interface ILogin {
  message?: string;
  status?: string;
}
function LoginHooks() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");
  const [emailValidation, setEmailValidation] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<ILogin>({});

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (re.test(email)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(email, password);

      if (!email || !password) {
        setLoginError({
          message: "Email dan Password Wajib Diisi!",
          status: STATUS_CODE[400],
        });
        return; // Stop execution if email or password is empty
      }

      if (!re.test(email)) {
        setLoginError({
          message: "Email Tidak Valid!",
          status: STATUS_CODE[400],
        });
        return;
      }

      // let data = JSON.stringify({
      //   "username": email,
      //   "password": password
      // });

      // let config = {
      //   method: 'post',
      //   maxBodyLength: Infinity,
      //   url: `${axiosAuth.defaults.baseURL}v1/user-login/login/`,
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   data: data
      // };

      // await axios.request(config)
      //   .then((response) => {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      const response = await axios.post(`${axiosAuth.defaults.baseURL}v1/user-login/login/`, {
        username: email,
        password: password,
      });

      if (response.data.access_token) {
        setLoginError({
          message: "Login Berhasil!",
          status: STATUS_CODE[200],
        });
        localStorage.setItem("token", response?.data.access_token);
      } else {
        setLoginError({
          message: "Email atau Password Salah!",
          status: STATUS_CODE[404],
        });
        return;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setLoginError({
          message: error.response?.data.message,
          status: STATUS_CODE[500],
        });
      }

      setLoginError({
        message: "Login Gagal, Terjadi Kesalahan!",
        status: STATUS_CODE[500],
      });
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
    loginError,
    setLoginError,
    handleEmail,
    handlePassword,
    togglePassword,
    handleSubmit,
  };
}

export default LoginHooks;
