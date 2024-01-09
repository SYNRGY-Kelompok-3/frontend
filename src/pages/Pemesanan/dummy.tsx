import { useState } from "react";
import Button from "../../components/atoms/Button";
import ConfirmOrder from "../../components/organisms/PopUp/confirmOrder";
import ConfirmPayment from "../../components/organisms/PopUp/confirmPayment";
import PaymentSuccess from "../../components/organisms/PopUp/paymentSuccess";

function DummyPemesanan() {
  const [showModalConfirmOrder, setShowModalConfirmOrder] = useState(false);
  const [showModalConfirmPayment, setShowModalConfirmPayment] = useState(false);
  const [showModalPaymentSuccess, setShowModalPaymentSuccess] = useState(false);

  const handleButtonClick = () => {
    setShowModalConfirmOrder(true);
  };

  const handleCloseClick = () => {
    setShowModalConfirmOrder(false);
  };

  const handleButtonClick2 = () => {
    setShowModalConfirmPayment(true);
  };

  const handleCloseClick2 = () => {
    setShowModalConfirmPayment(false);
  };

  const handleButtonClick3 = () => {
    setShowModalPaymentSuccess(true);
  };

  const handleCloseClick3 = () => {
    setShowModalPaymentSuccess(false);
  };

  return (
    <>
      {/* Button Konfirmasi Pemesanan */}
      <Button
        content={"Selanjutnya"}
        className={
          "button_large flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded bg-[#3e7bfa]"
        }
        onClick={handleButtonClick}
      />

      {/* Button Konfirmasi Pembayaran */}
      <Button
        content={"Bayar"}
        className={
          "button_large flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded bg-[#3e7bfa]"
        }
        onClick={handleButtonClick2}
      />

      {/* Button Pembayaran Berhasil*/}
      <Button
        content={"Ya, Benar"}
        className={
          "button_large flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded bg-[#3e7bfa]"
        }
        onClick={handleButtonClick3}
      />

      {showModalConfirmOrder && <ConfirmOrder onClose={handleCloseClick} />}
      {showModalConfirmPayment && <ConfirmPayment onClose={handleCloseClick2} />}
      {showModalPaymentSuccess && <PaymentSuccess onClose={handleCloseClick3} />}
    </>
  );
}

export default DummyPemesanan;
