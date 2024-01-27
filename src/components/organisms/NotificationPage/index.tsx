import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";

import Departure from "src/assets/FilterHome/plane-departure.png";

import { useNavigate } from "react-router-dom";

function Riwayat() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 p-5 sm:p8 border-2 rounded-lg m-4 h-[500px] overflow-y-auto sm:h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Notifikasi</h1>
          <h1 className="text-sm sm:text-md font-bold mb-4 text-sky-400">Mark All As Read</h1>
        </div>
        <div className="">
          <div
            onClick={() => navigate(`/riwayat-transaksi/${1}`)}
            className="grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 items-end my-2 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div>
                <Image src={Departure} alt={"departure"} className="h-[22px] sm:h-[30px]" />
              </div>
              <div>
                <div className="font-semibold text-sm lg:text-lg">Jakarta - Yogyakarta</div>
                <div className="grid lg:flex items-center lg:gap-2">
                  <div className="text-slate-400 flex items-center text-sm sm:text-md">
                    Selesaikan pembayaran sebelum
                    <span className="hidden lg:flex h-[6px] w-[6px] rounded-full bg-slate-400 ml-2"></span>
                  </div>
                  <div className="text-slate-400 text-sm sm:text-md">01 Januari 2022, pukul 19.30</div>
                </div>
                <div className="text-slate-400 text-sm sm:text-md">1 menti yang lalu</div>
              </div>
            </div>
            <div className="items-center justify-between gap-3 mt-3 lg:mt-0 hidden lg:flex">
              <div>
                <Image src={ChevronRight} alt={"chevron"} className={"h-[40px]"} />
              </div>
            </div>
          </div>
          {<div className="w-full h-[2px] my-4 bg-slate-400"></div>}
        </div>
      </div>
    </>
  );
}

export default Riwayat;
