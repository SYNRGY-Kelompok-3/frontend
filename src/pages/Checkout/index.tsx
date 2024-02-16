import Breadcrumb from "src/components/atoms/Breadcrumb";
import StepsOrder from "src/components/organisms/Steps";
import Order from "src/components/organisms/Order";
import { useState, useEffect } from "react";
import Backdrop from "src/components/atoms/Backdrop";
import SeatModal from "src/components/organisms/PopUp/SeatModal";
import { useLocation } from "react-router-dom";
import { resetState as resetCheckoutState } from "src/state/checkoutSlice/checkout";
import { resetState as resetPaymentState } from "src/state/checkoutSlice/payment";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/state/store";

function Checkout() {
  const [showModalSeat, setShowModal] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const modalHandler = () => {
    setShowModal(!showModalSeat);
  };

  const breadcrumbSteps = [
    { text: "Beranda", link: "#" },
    { text: "Cari Tiket", link: "#" },
    { text: "Checkout" },
  ];

  useEffect(() => {
    return () => {
      dispatch(resetCheckoutState());
      dispatch(resetPaymentState());
    };
  }, [dispatch, location]);

  return (
    <>
      {showModalSeat && (
        <Backdrop>
          <SeatModal onClose={modalHandler} />
        </Backdrop>
      )}
      <Breadcrumb steps={breadcrumbSteps} />
      <StepsOrder />
      <Order modalHandler={modalHandler} />
    </>
  );
}

export default Checkout;
