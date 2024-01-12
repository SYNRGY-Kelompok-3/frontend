import { X } from "lucide-react";
import IconCP from "../../../assets/PopUp/ConfirmPayment.svg";
import Image from "../../atoms/Img";
import PaymentSuccess from "./paymentSuccess";
import { useState } from "react";

interface ConfirmPaymentProps {
  onClose: () => void;
}

function ConfirmPayment({ onClose }: ConfirmPaymentProps) {
  const [showModalPaymentSuccess, setShowModalPaymentSuccess] = useState(false);

  const handleSuccessClick = () => {
    setShowModalPaymentSuccess(true);
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
      <div className="p-8 bg-white rounded-lg w-[500px]" style={{ marginTop: "-120px" }}>
        {/* Header */}
        <div className="flex items-center justify-end mb-4">
          <button onClick={onClose} className="text-black ">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Isi konten sesuai kebutuhan */}
          {/* Temp SVG */}
          <Image src={IconCP} alt={"Confirm Payment"} className="w-[190px] h-[140px] mb-5"></Image>
          <p className="text-black text-lg font-bold mb-2">Apakah Anda Ingin Melakukan Pembayaran?</p>
          <p className="text-black text-sm">
            Setelah menekan tombol
            <span className="text-[#3E7BFA] font-semibold text-center text-sm"> “Ya, Benar”</span> maka
            pembayaran akan secara otomatis menggunakan saldo rekening anda
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-5 gap-6">
          <button onClick={onClose} className="px-5 py-3 text-[#3E7BFA] text-lg bg-white rounded border-[2px]">Kembali</button>
          <button onClick={handleSuccessClick} className="px-5 py-3 text-white text-lg bg-[#3E7BFA] rounded border-[2px] border-[#3E7BFA]">
            Ya, Benar
          </button>
        </div>
      </div>
      {showModalPaymentSuccess && (
        <>
          <PaymentSuccess onClose={() => { setShowModalPaymentSuccess(false); onClose()} } />
          {/* <ConfirmPayment onClose={onClose} /> */}
        </>
      )}
    </div>
  );
}

export default ConfirmPayment;
