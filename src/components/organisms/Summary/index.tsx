import TimelineOrder from "../Timeline";
import Button from "../../atoms/Button";
import Image from "../../atoms/Img";
import Suitcase from "../../../assets/Suitcase.svg";
import BurgerSoda from "../../../assets/BurgerSoda.svg";
import ChairOffice from "../../../assets/ChairOffice.svg";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { CHECKOUT_FLOW } from "src/constants/";

interface SummaryOrderProps {
  modalHandler: () => void;
  flow: number;
}

function SummaryOrder({ flow, modalHandler }: SummaryOrderProps) {
  const { detailTicket } = useSelector((state: RootState) => state.ticket);
  return (
    <>
      <div className="w-full flex flex-col">
        <div key={detailTicket.id} className="space-y-3">
          <div className="rounded-lg border border-[#EDEDED] p-5">
            <details className="group" open>
              <summary className="flex items-center justify-between pb-5 text-base font-semibold list-none cursor-pointer">
                Penerbangan Dari `{detailTicket.originCity}` Ke `{detailTicket.destinationCity}`
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="block w-5 h-5 group-open:hidden"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden w-5 h-5 group-open:block"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
                  </svg>
                </div>
              </summary>
              <TimelineOrder />
            </details>
            <details className="group" open>
              <summary className="flex items-center justify-between py-5 text-base font-semibold list-none cursor-pointer">
                Fasilitas Penerbangan
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="block w-5 h-5 group-open:hidden"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden w-5 h-5 group-open:block"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
                  </svg>
                </div>
              </summary>
              <ul>
                <li className="flex items-center mb-3">
                  <Image src={Suitcase} alt={""} className={""} />
                  <div className="flex-1 ml-1.5">
                    <h3 className="text-xs font-medium">Kabin dan Bagasi</h3>
                    <p className="text-[10px] font-semibold text-[#757575]">
                      Maksimal kabin 7 kg dan bagasi 20 kg
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Image src={BurgerSoda} alt={""} className={""} />
                  <div className="flex-1 ml-1.5">
                    <h3 className="text-xs font-medium">Gratis Makan</h3>
                    <p className="text-[10px] font-semibold text-[#757575]">
                      Sudah termasuk gratis makan. Pembelian makanan tambahan tidak tersedia di halaman
                      pemesanan
                    </p>
                  </div>
                </li>
              </ul>
            </details>
          </div>
          <div
            className={`${
              flow === CHECKOUT_FLOW.FILL_IDENTITY ? "block" : "hidden"
            } rounded-lg border border-[#EDEDED] p-5`}
          >
            <details className="group" open>
              <summary className="flex items-center justify-between text-base font-semibold list-none cursor-pointer">
                Fasilitas Tambahan
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="block w-5 h-5 group-open:hidden"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden w-5 h-5 group-open:block"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
                  </svg>
                </div>
              </summary>
              <div className="flex items-center pt-5">
                <Image src={ChairOffice} alt={""} className={""} />
                <div className="flex-1 ml-1.5">
                  <h3 className="text-xs font-medium">Amankan Kursi</h3>
                  <p className="text-[10px] font-semibold text-[#757575]">
                    Jika anda ingin memilih kursi, maka akan dikenakan biaya tambahan
                  </p>
                </div>
                <Button
                  id={"pilih-kursi"}
                  type="button"
                  className={"text-xs font-semibold text-blue-500"}
                  content={"Pilih Kursi"}
                  onClick={modalHandler}
                />
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryOrder;
