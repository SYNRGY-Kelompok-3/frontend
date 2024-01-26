import React from "react";
import ImageConfirmEmail from "src/assets/images/image-confirm-email.svg";
interface IModalCheckEmail {
  handleCheckEmailClick: () => void;
}
const ModalCheckEmail: React.FC<IModalCheckEmail> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all sm:w-auto">
        <img src={ImageConfirmEmail} alt="tes" className="w-75 mx-auto" />
        <div className="text-sm mt-5 font-bold text-center text-blue-600 mb-4">
          Permintaan Atur Kata Sandi Terkirim!
        </div>
        <div className="text-center text-gray-700 mb-6 text-xs">
          Cek link atur ulang kata sandi pada email travel@gmail.com dan segera lakukan atur ulang kata sandi
          akunmu
        </div>
        <button
          onClick={props.handleCheckEmailClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-500 py-2 px-4 rounded w-full"
        >
          Cek Email
        </button>
      </div>
    </div>
  );
};

export default ModalCheckEmail;
