import { useState } from "react";
import FormCheckout from "../Form";
import SummaryOrder from "../Summary";

function Order() {
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
        <SummaryOrder />
      </div>
    </section>
  );
}

export default Order;
