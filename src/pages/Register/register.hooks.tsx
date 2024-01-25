import { useState } from "react";
// import axios, { AxiosError } from "axios";
// import { axiosAuth } from "src/services/axios";

interface IRegister {
  message?: string;
  status?: string;
}
function RegisterHooks() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");
  const [nameValidation, setNameValidation] = useState<boolean>(false);
  const [emailValidation, setEmailValidation] = useState<boolean>(false);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<IRegister>({});

  const reName = /^[A-Z a-z]+(?: [A-Z a-z]+)*$/;
  const reMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (reName.test(name)) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (reMail.test(email)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPhoneNumber(input);
    setPhoneNumberValidation(validatePhoneNumber(input));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10,14}$/;
    return phoneNumberPattern.test(phoneNumber);
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
      console.log(name, email, password, phoneNumber);

      if (name === "" || email === "" || password === "" || phoneNumber === "") {
        setRegisterError({
          message: "Pastikan semua data sudah terisi",
          status: "empty",
        });
        return; // Stop execution if data is empty
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    name,
    email,
    phoneNumber,
    password,
    setEmail,
    setPassword,
    passwordType,
    setPasswordType,
    nameValidation,
    setNameValidation,
    emailValidation,
    setEmailValidation,
    phoneNumberValidation,
    setPhoneNumberValidation,
    registerError,
    setRegisterError,
    handleName,
    handleEmail,
    handlePassword,
    handlePhoneNumber,
    togglePassword,
    handleSubmit,
  };
}

export default RegisterHooks;
