import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "src/assets/Logo.png";
import LogoBlue from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";

import Button from "src/components/atoms/Button";

import useAction from "./register.hooks";
import PublicProvider from "src/pages/PublicProvider";
import Modal from "./modal";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const {
    name,
    email,
    phoneNumber,
    password,
    passwordType,
    nameValidation,
    emailValidation,
    phoneNumberValidation,
    registerError,
    handleName,
    handleEmail,
    handlePassword,
    handlePhoneNumber,
    togglePassword,
    handleSubmit,
  } = useAction();

  return (
    <PublicProvider>
      <main>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="hidden xl:flex">
            <div className="min-h-screen bg-[url('src/assets/bglogin.png')] bg-cover">
              <div className="h-full bg-gradient-to-b from-[#3E7BFACF] via-[#2148C0E5] to-[#3E7BFA8A] bg-opacity-20">
                <div className="py-[160px] flex justify-center">
                  <Link to="/" className="flex justify-center items-center">
                    <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                    <div className={`text-white font-bold text-3xl`}>Travel.id</div>
                  </Link>
                </div>
                <div className="text-center pt-[60px] pb-[400px] mx-36">
                  <h4 className="font-bold text-3xl text-white leading-10">
                    "Kepuasan Anda Adalah Misi Kami"
                  </h4>
                  <p className="text-white text-xl">
                    Travel.id akan memberikan layanan terbaik dalam menemani perjalanan karena kepuasan anda
                    adalah bagian dari kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('src/assets/bglogin.png')] bg-cover xl:bg-none m-4">
            <div className="flex justify-center xl:hidden mt-[100px]">
              <Link to="/" className="flex justify-center items-center">
                <Image src={LogoBlue} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                <div className="text-[#075efd] font-bold text-3xl">Travel.id</div>
              </Link>
            </div>
            <div className="my-[100px] xl:my-[150px] flex justify-center">
              <div className="w-[65%] xl:w-[100%] flex-col min-w-0 break-words bg-white xl:bg-transparent border-0 lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border shadow">
                <div className="p-6 pb-0 mb-0">
                  <div className="font-bold text-3xl flex gap-5 items-center">
                    <Link to="/">
                      <i className="fa fa-arrow-left"></i>
                    </Link>
                    <p>Buat Akunmu Sekarang</p>
                  </div>
                  <div className="py-3">
                    <p className="leading-normal">
                      Nikmati perjalananmu bersama kami. Sudah punya akun?
                      <Link
                        to="/login"
                        className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 mx-1"
                      >
                        Masuk
                      </Link>
                    </p>
                  </div>
                  {registerError.status === "empty" ? (
                    <div className="py-3">
                      <p className="leading-normal text-red-600">Pastikan semua data telah terisi!</p>
                    </div>
                  ) : null}
                  {registerError.status === "success" ? (
                    <div className="py-3">
                      <p className="leading-normal text-lime-500">Register Berhasil!</p>
                    </div>
                  ) : null}
                  {registerError.status === "error" ? (
                    <div className="py-3">
                      <p className="leading-normal text-red-500">Terjadi kesalahan dalam mengirim data</p>
                    </div>
                  ) : null}
                </div>
                <div className="px-6">
                  <form role="form" onSubmit={handleSubmit}>
                    {/* nama lengkap */}
                    <div className="mt-3">
                      <label className="py-2">Nama Lengkap</label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Masukkan nama lengkap"
                          onChange={handleName}
                          value={name}
                          onFocus={() => setIsNameFocused(true)}
                          onBlur={() => setIsNameFocused(false)}
                          className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                        />
                        <div className="-ml-8">
                          {name === "" ? (
                            ""
                          ) : nameValidation ? (
                            <i className="fa-regular fa-circle-check text-lime-500"></i>
                          ) : (
                            <i className="fa-regular fa-circle-xmark"></i>
                          )}
                        </div>
                      </div>
                      {!nameValidation && isNameFocused && (
                        <p className="text-[#CB3A31] mt-1 text-xs">nama lengkap hanya dapat berupa huruf</p>
                      )}
                    </div>
                    {/* email */}
                    <div className="mt-3">
                      <label className="py-2">Email</label>
                      <div className="flex items-center">
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={handleEmail}
                          value={email}
                          onFocus={() => setIsEmailFocused(true)}
                          onBlur={() => setIsEmailFocused(false)}
                          className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                        />
                        <div className="-ml-8">
                          {email === "" ? (
                            ""
                          ) : emailValidation ? (
                            <i className="fa-regular fa-circle-check text-lime-500"></i>
                          ) : (
                            <i className="fa-regular fa-circle-xmark"></i>
                          )}
                        </div>
                      </div>
                      {!emailValidation && isEmailFocused && (
                        <p className="mt-1 text-[#CB3A31] text-xs">format email tidak sesuai</p>
                      )}
                    </div>
                    {/* no. handphone */}
                    <div className="mt-3">
                      <label className="py-2">No. Handphone</label>
                      <div className="flex items-center">
                        <input
                          type="string"
                          placeholder="Masukkan no. handphone"
                          onChange={handlePhoneNumber}
                          value={phoneNumber}
                          onFocus={() => setIsPhoneNumberFocused(true)}
                          onBlur={() => setIsPhoneNumberFocused(false)}
                          className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                        />
                        <div className="-ml-8">
                          {phoneNumber === "" ? (
                            ""
                          ) : phoneNumberValidation ? (
                            <i className="fa-regular fa-circle-check text-lime-500"></i>
                          ) : (
                            <i className="fa-regular fa-circle-xmark"></i>
                          )}
                        </div>
                      </div>
                      {!phoneNumberValidation && isPhoneNumberFocused && (
                        <p className="mt-1 text-[#CB3A31] text-xs">masukkan 10 - 14 digit nomor telepon</p>
                      )}
                    </div>
                    {/* password */}
                    <div className="mt-3">
                      <label className="py-2">Kata Sandi</label>
                      <div className="flex items-center">
                        <input
                          type={passwordType}
                          placeholder="Masukkan kata sandi"
                          onChange={handlePassword}
                          value={password}
                          className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                        />
                        <Button
                          content={
                            passwordType === "password" ? (
                              <i className="fa-solid fa-eye"></i>
                            ) : (
                              <i className="fa-solid fa-eye-slash"></i>
                            )
                          }
                          type={"button"}
                          onClick={togglePassword}
                          className={"-ml-8"}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-block w-full my-6 px-16 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                      onClick={() => setShowModal(true)}
                    >
                      Daftar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal visible={showModal} onClose={handleCloseModal} />
      </main>
    </PublicProvider>
  );
}

export default Register;
