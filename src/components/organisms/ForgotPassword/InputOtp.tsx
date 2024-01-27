import { Link } from "react-router-dom";
import LogoBlue from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import { useOtp } from "src/usecases/auth/useOtp";

const OTPInput: React.FC = () => {
  const { otpValues, handleKeyUp, handleChangeInputOtp } = useOtp();

  return (
    <div id="otp" className="flex flex-row justify-between text-center px-2 my-5">
      {otpValues.map((value, index) => (
        <input
          key={index}
          name={`otpInput${index}`}
          className="w-10 h-10 sm:w-20 sm:h-20 border-2 rounded-lg bg-white outline-none text-center font-bold text-xl  border-[#E0E0E0] focus:border-gray-700 focus:text-gray-700 text-black transition  "
          type="number"
          id={`otpInput${index}`}
          maxLength={1}
          value={value}
          onChange={(e) => handleChangeInputOtp(e, index)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
      ))}
    </div>
  );
};

const InputOtp = () => {
  const { handleValidateOtp, otpError, handleResendOtp, email } = useOtp();
  return (
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
            <div className="font-bold text-2xl sm:text-3xl">Masukkan Kode OTP</div>
            <div className="py-3">
              <p className="leading-normal text-sm sm:text-md">
                Kode OTP dikirim pada email <span className="text-[#3E7BFA]">{email}</span>
              </p>
            </div>
          </div>
          <div className="px-6">
            <form role="form" onSubmit={handleValidateOtp}>
              <OTPInput />
              <p className="leading-normal text-sm sm:text-md text-red-500">{otpError}</p>
              <p className="leading-normal text-sm sm:text-md">
                Belum mendapatkan kode?
                <span className="text-[rgb(203,58,49)] cursor-pointer" onClick={handleResendOtp}>
                  {" "}
                  Kirim Ulang
                </span>
              </p>
              <Button
                content={"Kirim"}
                type={"submit"}
                className={
                  "inline-block w-full my-6 px-16 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputOtp;
