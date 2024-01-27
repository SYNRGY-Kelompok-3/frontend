import { Link } from "react-router-dom";
import Logo from "src/assets/Logo.png";
import Image from "src/components/atoms/Img";
import { FORGOT_PWD_FLOW } from "src/constants";
import { useForgotPassword } from "src/usecases/auth/useForgotPassword";
import InputOtp from "src/components/organisms/ForgotPassword/InputOtp";
import EmailForm from "src/components/organisms/ForgotPassword/EmailForm";
import ResetPasswordForm from "src/components/organisms/ForgotPassword/ResetPasswordForm";

import PublicProvider from "src/pages/PublicProvider";
import PopupConfirm from "src/components/organisms/ForgotPassword/ModalPopupConfirm";

import ImageConfirmEmail from "src/assets/images/image-confirm-email.svg";
import ImageResetPasswordDone from "src/assets/images/image-reset-password-done.svg";

function ForgotPassword() {
  const { flow, handleCheckEmailClick, onRedirectLogin } = useForgotPassword();

  return (
    <PublicProvider>
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
          <PopupConfirm
            redirectAction={handleCheckEmailClick}
            btnlabel="Cek Email"
            image={ImageConfirmEmail}
            label="Permintaan Atur Kata Sandi Terkirim!"
            desc="Cek link atur ulang kata sandi pada email travel@gmail.com dan segera lakukan atur ulang kata sandi akunmu"
          />
        )}
        {flow === FORGOT_PWD_FLOW.INPUT_OTP && <InputOtp />}
        {[FORGOT_PWD_FLOW.RESET_PASSWORD, FORGOT_PWD_FLOW.END_FLOW].includes(flow) && <ResetPasswordForm />}
        {flow === FORGOT_PWD_FLOW.END_FLOW && (
          <PopupConfirm
            redirectAction={onRedirectLogin}
            btnlabel="Selesai"
            image={ImageResetPasswordDone}
            label="Kata Sandi Berhasil Diperbarui"
            desc="Yeay, kamu sudah berhasil memperbarui kata sandi. Ingat dan jangan sampai lupa lagi yah"
          />
        )}
      </div>
    </PublicProvider>
  );
}

export default ForgotPassword;
