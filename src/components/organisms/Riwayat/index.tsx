import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";

import Departure from "src/assets/FilterHome/plane-departure.png";

import { useNavigate } from "react-router-dom";
import { DEFAULT_CURRENCY } from "src/constants/common";
import { useDateFormatter } from "src/usecases/common/useDateFormat";
import useAction from "./riwayat.hooks";

function Riwayat() {
  const navigate = useNavigate();
  const { formatDateMonthYear } = useDateFormatter();
  const { bookings, bookingsDetail } = useAction();

  return (
    <>
      <div className="flex-1 p-5 sm:p-8 border-2 rounded-lg mt-4 ml-4 mr-4 sm:mr-0 h-[500px] overflow-y-auto sm:h-screen">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Riwayat Transaksi</h1>
        <div className="">
          {bookings
            .slice(0)
            .reverse()
            .map((booking, index) => (
              <div
                key={index}
                onClick={() => navigate(`/riwayat-transaksi/${booking.id}`)}
                className="grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 items-end my-2 cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <Image src={Departure} alt={"departure"} className="h-[22px] sm:h-[30px]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm lg:text-lg">
                      {bookingsDetail[index].length === 0
                        ? "Belum Berangkat"
                        : `${bookingsDetail[index][0].flight["originCity"]} - ${bookingsDetail[index][0].flight["destinationCity"]}`}
                    </div>
                    <div className="grid lg:flex items-center lg:gap-2">
                      <div className="text-slate-400 flex items-center text-sm sm:text-md">
                        No. Pemesanan {booking.id}{" "}
                        <span className="hidden lg:flex h-[6px] w-[6px] rounded-full bg-slate-400 ml-2"></span>
                      </div>
                      <div className="text-slate-400 text-sm sm:text-md">
                        {formatDateMonthYear(booking.created_date)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mt-3 lg:mt-0">
                  <div className="space-y-1 flex items-center sm:grid ">
                    <div className="flex justify-start lg:justify-end ">
                      <p
                        className={`text-white w-fit ${
                          bookingsDetail[index].length ? "bg-[#18AF5E]" : "bg-blue-500"
                        } py-1 px-2 rounded-lg text-sm sm:text-lg`}
                      >
                        {bookingsDetail[index].length === 0 ? "Selesaikan" : "Selesai"}
                      </p>
                    </div>
                    <p className="text-[#3E7BFA] text-lg ml-3 sm:text-xl font-semibold">
                      {DEFAULT_CURRENCY}. {booking.totalPrice}
                    </p>
                  </div>
                  <div>
                    <Image src={ChevronRight} alt={"chevron"} className={"h-[40px]"} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Riwayat;
