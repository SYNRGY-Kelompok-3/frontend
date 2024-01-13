import { useState } from "react";
import FormCheckout from "../Form";
import SummaryOrder from "../Summary";

interface OrderProps {
  modalHandler: () => void;
}

function Order({ modalHandler }: OrderProps) {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      <div className="flex px-[38px]">
        <FormCheckout
          firstName=""
          lastName=""
          titel=""
          firstName2=""
          lastName2=""
          titel2=""
          checked={checked}
          setChecked={setChecked}
        />
        <SummaryOrder modalHandler={modalHandler} />
      </div>
    </section>
  );
}

export default Order;
