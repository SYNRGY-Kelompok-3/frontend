import FormCheckout from "../Form";
import SummaryOrder from "../Summary";
import CardPayment from "../CardPayment";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { CHECKOUT_FLOW } from "src/constants/";
import Invoice from "../Invoice";
import PopupConfirm from "src/components/organisms/ForgotPassword/ModalPopupConfirm";
import ImagePopup from "src/assets/success-payment.svg";
import { useState } from "react";
interface OrderProps {
  modalHandler: () => void;
}

const Order = ({ modalHandler }: OrderProps) => {
  const { flow } = useSelector((state: RootState) => state.checkout);
  const [showPopup, setShowPopup] = useState<boolean>(true);

  return (
    <section>
      <div className="flex justify-center px-[38px]">
        {[CHECKOUT_FLOW.FILL_IDENTITY, CHECKOUT_FLOW.FILL_PAYMENT_METHOD].includes(flow) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {flow === CHECKOUT_FLOW.FILL_IDENTITY ? <FormCheckout /> : <CardPayment />}
            <SummaryOrder modalHandler={modalHandler} />
          </div>
        )}
        {flow === CHECKOUT_FLOW.INVOICE_SUMMARY && <Invoice />}
        {showPopup && flow === CHECKOUT_FLOW.INVOICE_SUMMARY && (
          <PopupConfirm
            redirectAction={() => setShowPopup(false)}
            btnlabel="Selesai"
            image={ImagePopup}
            label="Yeay, Pembayaran Telah Berhasil"
            desc="Selamat pembayaran anda telah berhasil, Nikmati perjalananmu bersama travel.id"
          />
        )}
      </div>
    </section>
  );
};

export default Order;
