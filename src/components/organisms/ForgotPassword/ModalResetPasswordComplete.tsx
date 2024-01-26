import React from "react";
import ImageResetPasswordDone from "src/assets/images/image-reset-password-done.svg";

interface IModalResetPasswordComplete {
  onRedirectLogin: () => void;
}
const ModalResetPasswordComplete: React.FC<IModalResetPasswordComplete> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all sm:w-auto">
        <img src={ImageResetPasswordDone} alt="tes" className="w-75 mx-auto" />
        <div className="text-sm mt-5 font-bold text-center text-blue-600 mb-4">
          Kata Sandi Berhasil Diperbarui
        </div>
        <div className="text-center text-gray-700 mb-6 text-xs">
          Yeay, kamu sudah berhasil memperbarui kata sandi. Ingat dan jangan sampai lupa lagi yah
        </div>
        <button
          onClick={props.onRedirectLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-500 py-2 px-4 rounded w-full"
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default ModalResetPasswordComplete;
