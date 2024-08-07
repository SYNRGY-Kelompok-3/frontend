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
  const { handleValidateOtp, otpError, handleResendOtp, email, isLoading } = useOtp();
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
            <div className="font-bold text-2xl sm:text-3xl">
              <Link to={`/login`}>
                <span>
                  <i className="fa fa-arrow-left text-gray-500 pr-5"></i>
                </span>
              </Link>
              Masukkan Kode OTP
            </div>
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
                content={
                  isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Kirim"
                  )
                }
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
