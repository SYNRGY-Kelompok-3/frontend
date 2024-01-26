import { Link } from "react-router-dom";
import LogoBlue from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import { useForgotPassword } from "src/usecases/auth/useForgotPassword";

const EmailForm = () => {
  const { handleSubmit, handleChange, emailError, inputRef } = useForgotPassword();

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
            <div className="font-bold text-2xl sm:text-3xl">Lupa Akun Travel.id?</div>
            <div className="py-3">
              <p className="leading-normal text-sm sm:text-md">Jangan Khawatir, masukkan emailmu disini</p>
            </div>
          </div>
          <div className="px-6">
            <form role="form" onSubmit={handleSubmit}>
              <div className="">
                <div className="py-2">Email</div>
                <div className="flex items-center">
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid ${
                      emailError ? "border-red-500" : "border-gray-300"
                    }  bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none`}
                    onChange={handleChange}
                  />
                  <div className="-ml-8">
                    {!emailError ? (
                      <i className="fa-regular fa-circle-check text-lime-500"></i>
                    ) : (
                      <i className="fa-regular fa-circle-xmark"></i>
                    )}
                  </div>
                </div>
                <div className="py-2 text-red-500">{emailError}</div>
              </div>
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

export default EmailForm;
