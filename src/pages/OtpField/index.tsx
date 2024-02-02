import { Link } from "react-router-dom";
import React, { FC, useState } from "react";
import Logo from "src/assets/Logo.png";
import LogoBlue from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import Modal from "./modal";
import userAction from "./otp.hooks";

interface Props {}

const Otp: FC<Props> = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const { handleOtpSubmit, handleResendOtp, handleOnChange, handleOnKeyDown, otp, inputRef, activeOtpIndex } =
    userAction();

  return (
    <main>
      <div className="grid grid-cols-1 lg:flex lg:justify-between lg:items-center">
        <div className="hidden lg:w-[50%] lg:flex h-screen">
          <div className="min-h-screen bg-[url('src/assets/bglogin.png')] bg-cover">
            <div className="h-full bg-gradient-to-b from-[#3E7BFACF] via-[#2148C0E5] to-[#3E7BFA8A] bg-opacity-20">
              <div className="py-36 flex justify-center">
                <Link to="/" className="flex justify-center items-center">
                  <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                  <div className={`text-white font-bold text-3xl`}>Travel.id</div>
                </Link>
              </div>
              <div className="text-center mx-36">
                <h4 className="font-bold text-3xl text-white leading-10">"Kepuasan Anda Adalah Misi Kami"</h4>
                <p className="text-white text-xl">
                  Travel.id akan memberikan layanan terbaik dalam menemani perjalanan karena kepuasan anda
                  adalah bagian dari kami.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] bg-[url('src/assets/bglogin.png')] bg-cover lg:bg-none lg:m-4 h-screen lg:h-full">
          <div className="flex justify-center lg:hidden mt-[100px]">
            <Link to="/" className="flex justify-center items-center">
              <Image src={LogoBlue} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
              <div className="text-[#075efd] font-bold text-3xl">Travel.id</div>
            </Link>
          </div>
          <div className="flex justify-center mt-[50px]">
            <div className="w-[90%] lg:w-[100%] flex-col min-w-0 break-words bg-white xl:bg-transparent border-0 lg:py-4 dark:bg-gray-950 rounded-2xl bg-clip-border shadow-lg">
              <div className="p-6 pb-0 mb-0">
                <div className="font-bold text-3xl flex gap-5 items-center">
                  <Link to="/register" className="text-xl">
                    <i className="fa fa-arrow-left"></i>
                  </Link>
                  <p className="font-bold text-2xl sm:text-3xl">Masukkan Kode OTP</p>
                </div>
                <div className="py-3">
                  <p className="leading-normal text-sm sm:text-md">
                    Kode OTP dikirim pada email <span className="text-[#3E7BFA]">travel@gmail.com</span>
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  handleOtpSubmit(e, () => setShowModal(true));
                }}
                role="form"
                className="px-6 mt-6 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center space-x-2">
                  {otp.map((_, index) => {
                    return (
                      <React.Fragment key={index}>
                        <input
                          ref={index === activeOtpIndex ? inputRef : null}
                          type="number"
                          className="w-10 h-10 sm:w-20 sm:h-20 border-2 rounded-lg bg-white outline-none text-center font-bold text-xl spin-button-none border-[#E0E0E0] focus:border-gray-700 focus:text-gray-700 text-black transition spin-button-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          onChange={handleOnChange}
                          value={otp[index]}
                          onKeyDown={(e) => handleOnKeyDown(e, index)}
                        />
                        {index === otp.length - 1 ? null : <span className="py-0.5 bg-gray-400" />}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="flex gap-1">
                  <p className="font-normal">Belum mendapatkan kode? </p>
                  <Button
                    type="button"
                    content={"Kirim Ulang"}
                    className="text-[rgb(203,58,49)]"
                    onClick={() => handleResendOtp()}
                  />
                </div>

                <Button
                  type="submit"
                  content={"Verifikasi"}
                  className="inline-block w-full my-6 px-16 py-3.5 font-semibold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={showModal} onClose={handleCloseModal} />
    </main>
  );
};

export default Otp;
