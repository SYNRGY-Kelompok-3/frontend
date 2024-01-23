import Breadcrumb from "src/components/atoms/Breadcrumb";
import StepsOrder from "src/components/organisms/Steps";
import Order from "src/components/organisms/Order";
import { useState } from "react";
import Backdrop from "src/components/atoms/Backdrop";
import SeatModal from "src/components/organisms/SeatModal";

function Checkout() {
  const [showModalSeat, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(!showModalSeat);
  };

  const breadcrumbSteps = [
    { text: "Beranda", link: "#" },
    { text: "Cari Tiket", link: "#" },
    { text: "Checkout" },
  ];

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
