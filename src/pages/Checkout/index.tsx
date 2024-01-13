import Breadcrumb from "../../components/organisms/Breadcrumb";
import StepsOrder from "../../components/organisms/Steps";
import Order from "../../components/organisms/Order";
import { useState } from "react";
import Backdrop from "src/components/atoms/Backdrop";
import SeatModal from "src/components/organisms/SeatModal";

function Checkout() {
  const [showModalSeat, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(!showModalSeat);
  };

  return (
    <>
      {showModalSeat && (
        <Backdrop>
          <SeatModal onClose={modalHandler} />
        </Backdrop>
      )}
      <Breadcrumb />
      <StepsOrder />
      <Order modalHandler={modalHandler} />
    </>
  );
}

export default Checkout;
