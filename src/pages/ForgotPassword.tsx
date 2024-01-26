import { Link } from "react-router-dom";
import Logo from "src/assets/Logo.png";
import Image from "src/components/atoms/Img";
import { FORGOT_PWD_FLOW } from "src/constants";
import { useForgotPassword } from "src/usecases/auth/useForgotPassword";

import ModalCheckEmail from "src/components/organisms/ForgotPassword/ModalCheckEmail";
import InputOtp from "src/components/organisms/ForgotPassword/InputOtp";
import ModalResetPasswordComplete from "src/components/organisms/ForgotPassword/ModalResetPasswordComplete";
import EmailForm from "src/components/organisms/ForgotPassword/EmailForm";
import ResetPasswordForm from "src/components/organisms/ForgotPassword/ResetPasswordForm";

function ForgotPassword() {
  const { flow, handleCheckEmailClick, onRedirectLogin } = useForgotPassword();

  return (
    <div className="grid grid-cols-1 lg:flex lg:justify-between lg:items-center">
      <div className="hidden lg:w-[50%] lg:flex h-screen">
        <div className="h-screen bg-[url('src/assets/bglogin.png')] bg-cover">
          <div className="h-full bg-violet-500 bg-opacity-20">
            <div className="py-[160px] flex justify-center">
              <Link to="/" className="flex justify-center items-center">
                <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                <div className={`text-white font-bold text-3xl`}>Travel.id</div>
              </Link>
            </div>
            <div className="text-center pt-[60px] pb-[400px] mx-36">
              <h4 className="font-bold text-3xl text-white leading-10">"Kepuasan Anda Adalah Misi Kami"</h4>
              <p className="text-white text-xl">
                Travel.id akan memberikan layanan terbaik dalam menemani perjalanan karena kepuasan anda
                adalah bagian dari kami.
              </p>
            </div>
          </div>
        </div>
      </div>

      {[FORGOT_PWD_FLOW.EMAIL_INPUT, FORGOT_PWD_FLOW.CHECK_EMAIL].includes(flow) && <EmailForm />}
      {flow === FORGOT_PWD_FLOW.CHECK_EMAIL && (
        <ModalCheckEmail handleCheckEmailClick={handleCheckEmailClick} />
      )}
      {flow === FORGOT_PWD_FLOW.INPUT_OTP && <InputOtp />}
      {[FORGOT_PWD_FLOW.RESET_PASSWORD, FORGOT_PWD_FLOW.END_FLOW].includes(flow) && <ResetPasswordForm />}
      {flow === FORGOT_PWD_FLOW.END_FLOW && <ModalResetPasswordComplete onRedirectLogin={onRedirectLogin} />}
    </div>
  );
}

export default ForgotPassword;
