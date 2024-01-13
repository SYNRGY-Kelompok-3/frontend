import { X } from "lucide-react";
import IconSP from "../../../assets/PopUp/SuccessPayment.svg";
import Image from "../../atoms/Img";
// import ConfirmPayment from "./confirmPayment";
// import { useState } from "react";

interface PaymentSuccessProps {
  onClose: () => void;
}

function PaymentSuccess({ onClose }: PaymentSuccessProps) {
  // const [showModal, setShowModal] = useState(false);

  // const handleSuccessClick = () => {
  //   setShowModal(true);
  // }


  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
      <div className="p-8 bg-white rounded-lg w-[500px]" style={{ marginTop: "-120px" }}>
        {/* Header */}
        <div className="flex items-center justify-end mb-4">
          <button onClick={() => { onClose() }} className="text-black ">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Isi konten sesuai kebutuhan */}
          {/* Temp SVG */}
          <Image src={IconSP} alt={"Success Payment"} className="w-[190px] h-[140px] mb-5"></Image>

          <p className="text-black text-lg font-bold mb-2">Yeay, Pembayaran Telah Berhasil</p>
          <p className="text-black text-sm">
            Selamat pembayaran anda telah berhasil, Nikmati perjalananmu bersama travel.id
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-5 gap-6">
          <button onClick={onClose} className="w-full px-5 py-3 text-white text-lg bg-[#3E7BFA] rounded border-[2px] border-[#3E7BFA]">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
