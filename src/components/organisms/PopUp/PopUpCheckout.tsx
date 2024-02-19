import React from "react";
interface IModalCheckEmail {
  okAction?: () => void;
  cancelAction?: () => void;
  label: string;
  desc: string;
  btnlabel: string;
  btnLabelCancel: string;
  image: string;
  isWithAction: boolean;
}
const PopUpCheckout: React.FC<IModalCheckEmail> = (props) => {
  const { label, desc, okAction, cancelAction, btnlabel, image, isWithAction, btnLabelCancel } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all sm:w-auto mx-[20px]">
        <img src={image} alt="tes" className="w-75 mx-auto" />
        <div className="text-sm mt-5 font-bold text-center text-blue-600 mb-4">{label}</div>
        <div
          className="text-center text-gray-700 mb-6 text-xs"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
        {isWithAction && (
          <div className="flex justify-center items-center gap-[20px]">
            <button
              id="kembali"
              onClick={cancelAction}
              className="w-[200px] bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-500 py-2 px-4 rounded-lg"
            >
              {btnLabelCancel}
            </button>
            <button
              id="konfirmasi"
              onClick={okAction}
              className="w-[200px] bg-blue-500 hover:bg-blue-600 text-white font-500 py-2 px-4 rounded-lg"
            >
              {btnlabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpCheckout;
