import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";

import Departure from "src/assets/FilterHome/plane-departure.png";

import { useNavigate } from "react-router-dom";

function Riwayat() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 p-10 border-2 rounded-md m-4 xl:h-screen">
        <h1 className="text-2xl font-bold mb-4">Riwayat Transaksi</h1>
        <div className="">
          <div
            onClick={() => navigate(`/riwayat-transaksi/${1}`)}
            className="grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 items-end my-2 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div>
                <Image src={Departure} alt={"departure"} className="h-[30px]" />
              </div>
              <div>
                <div className="font-semibold lg:text-lg">Jakarta - Yogyakarta</div>
                <div className="grid lg:flex items-center lg:gap-2">
                  <div className="text-slate-400 flex items-center">
                    No. Pemesanan 1023123412{" "}
                    <span className="hidden lg:flex h-[6px] w-[6px] rounded-full bg-slate-400 ml-2"></span>
                  </div>
                  <div className="text-slate-400">01 Januari 2022</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 mt-3 lg:mt-0">
              <div className="space-y-1">
                <div className="flex justify-start lg:justify-end ">
                  <p className="text-white w-fit bg-[#18AF5E] py-1 px-2 rounded-lg text-[18px]">Berhasil</p>
                </div>
                <p className="text-[#3E7BFA] text-[24px] font-semibold">Rp. 1.000.000</p>
              </div>
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
