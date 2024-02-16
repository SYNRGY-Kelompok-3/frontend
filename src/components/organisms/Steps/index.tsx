import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { CHECKOUT_FLOW } from "src/constants/";

const StepsOrder = () => {
  const { flow } = useSelector((state: RootState) => state.checkout);
  return (
    <section>
      <div className="grid justify-items-center">
        <div className="w-[70%] sm:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] py-5">
          <div className="relative ">
            <ol className="relative z-10 flex justify-between text-base font-semibold text-gray-500">
              <li className="bg-white ">
                <li
                  className={`flex items-center gap-2 rounded-full ${
                    flow === CHECKOUT_FLOW.FILL_IDENTITY ? `bg-blue-500` : "bg-green-500"
                  } p-2`}
                >
                  <span className="h-6 w-6 rounded-full bg-white text-center text-[10px]/6 font-bold text-blue-500">
                    1
                  </span>
                  <span className="hidden sm:block sm:text-xs md:text-sm lg:text-md text-white mr-4">
                    Pemesanan Tiket
                  </span>
                </li>
              </li>
              {flow > 0 && (
                <span className={`mt-2 ${flow === 1 ? "text-green-500" : "text-blue-500"}`}>
                  &bull; &bull; &bull; &bull;
                </span>
              )}
              <li className="bg-white ">
                <li
                  className={`flex items-center gap-2 rounded-full ${
                    flow === CHECKOUT_FLOW.FILL_PAYMENT_METHOD
                      ? `bg-blue-500`
                      : flow === CHECKOUT_FLOW.FILL_IDENTITY
                      ? "bg-gray-50"
                      : "bg-green-500"
                  } p-2`}
                >
                  <span className="h-6 w-6 rounded-full bg-white border border-gray-200 text-center text-[10px]/6 font-bold">
                    2
                  </span>
                  <span
                    className={`hidden sm:block sm:text-xs md:text-sm lg:text-md ${
                      flow === CHECKOUT_FLOW.FILL_PAYMENT_METHOD && "text-white"
                    } mr-4`}
                  >
                    Pembayaran
                  </span>
                </li>
              </li>
              {flow > 0 && (
                <span className={`mt-2 ${flow === 1 ? "text-green-500" : "text-blue-500"}`}>
                  &bull; &bull; &bull; &bull;
                </span>
              )}
              <li className="bg-white">
                <li
                  className={`flex items-center gap-2 rounded-full ${
                    flow === CHECKOUT_FLOW.INVOICE_SUMMARY ? `bg-blue-500` : "bg-gray-50"
                  } p-2`}
                >
                  <span className="h-6 w-6 rounded-full bg-white border border-gray-200 text-center text-[10px]/6 font-bold">
                    3
                  </span>
                  <span
                    className={`hidden sm:block sm:text-xs md:text-sm lg:text-md ${
                      flow === CHECKOUT_FLOW.INVOICE_SUMMARY && "text-white"
                    } mr-4`}
                  >
                    Selesai
                  </span>
                </li>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsOrder;
