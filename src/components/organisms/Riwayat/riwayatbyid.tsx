import Image from "src/components/atoms/Img";
import Departure from "src/assets/FilterHome/plane-departure.png";

import { useNavigate } from "react-router-dom";
import { DEFAULT_CURRENCY } from "src/constants/common";
import { useDateFormatter } from "src/usecases/common/useDateFormat";
import useAction from "./riwayat.hooks";
import Suitcase from "src/assets/Suitcase.svg";
import BurgerSoda from "src/assets/BurgerSoda.svg";
import TimelineOrder from "./timeline";

function Riwayat() {
  const navigate = useNavigate();
  const { formatDateMonthYear } = useDateFormatter();
  const { booking, bookingDetail } = useAction();

  return (
    <>
      <div className="flex-1 p-5 sm:p-8 border-2 rounded-lg m-4 h-[500px] overflow-y-auto sm:h-screen">
        <div className="flex items-center">
          <div onClick={() => navigate(-1)} className="text-xl flex">
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className="text-xl sm:text-2xl font-bold ml-4">Detail Transaksi</div>
        </div>
        <div className="mt-5">
          <div className="grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 items-end my-2 cursor-pointer">
            <div className="flex items-center gap-5">
              <div>
                <Image src={Departure} alt={"departure"} className="h-[22px] sm:h-[30px]" />
              </div>
              <div>
                <div className="font-semibold text-sm lg:text-lg">
                  {bookingDetail.length === 0
                    ? "-"
                    : `${bookingDetail[0]?.flight.originCity} - ${bookingDetail[0]?.flight.destinationCity}`}
                </div>
                <div className="grid lg:flex items-center lg:gap-2">
                  <div className="text-slate-400 flex items-center text-sm sm:text-md">
                    No. Pemesanan {booking?.id}{" "}
                    <span className="hidden lg:flex h-[6px] w-[6px] rounded-full bg-slate-400 ml-2"></span>
                  </div>
                  <div className="text-slate-400 text-sm sm:text-md">
                    {formatDateMonthYear(booking?.created_date)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 mt-3 lg:mt-0">
              <div className="space-y-1 flex items-center sm:grid ">
                <div className="flex justify-start lg:justify-end ">
                  <p
                    className={`text-white w-fit ${
                      bookingDetail.length === 0 ? "bg-[#18AF5E]" : "bg-blue-500"
                    } py-1 px-2 rounded-lg text-sm sm:text-lg`}
                  >
                    {bookingDetail.length === 0 ? "Selesaikan" : "Selesai"}
                  </p>
                </div>
                <p className="text-[#3E7BFA] text-lg ml-3 sm:text-xl font-semibold">
                  {DEFAULT_CURRENCY}. {booking?.totalPrice}
                </p>
              </div>
            </div>
          </div>
          <details className="group mt-5" open>
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold list-none cursor-pointer">
              Detail Pembayaran
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
            <div className="mt-5 flex justify-between items-center">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500">Bank Pembayaran</div>
                <div className="text-slate-500">Nama Rekening</div>
                <div className="text-slate-500">Nomor Rekening</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold flex justify-end">{booking?.bankPembayaran}</div>
                <div className="font-bold flex justify-end">{booking?.namaRekening}</div>
                <div className="font-bold flex justify-end">s{booking?.nomorRekening}</div>
              </div>
            </div>
          </details>
          <details className="group mt-5" open>
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold list-none cursor-pointer">
              Detail Pemesan
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
            <div className="mt-5 flex justify-between items-center">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500">Nama Lengkap</div>
                <div className="text-slate-500">No. Telepon</div>
                <div className="text-slate-500">Email</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold flex justify-end">Tn/Ms. {booking?.customer.name}</div>
                <div className="font-bold flex justify-end">{booking?.customer.phoneNumber}</div>
                <div className="font-bold flex justify-end">s{booking?.customer.email}</div>
              </div>
            </div>
          </details>
          <details className="group mt-5" open>
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold list-none cursor-pointer">
              Detail Penumpang
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
            {bookingDetail.map((bookingDetail, index) => (
              <div key={index} className="mt-3 p-2 rounded-lg bg-blue-300 text-blue-500 font-bold">
                Tn/Ms. {bookingDetail.customerName}
              </div>
            ))}
          </details>
          <details className="group mt-5">
            <summary className="flex items-center justify-between pb-5 text-lg sm:text-xl font-bold list-none cursor-pointer">
              Penerbangan Dari {bookingDetail[0]?.flight.originCity} ke{" "}
              {bookingDetail[0]?.flight.destinationCity}
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
            <div className="text-lg sm:text-xl font-bold">Fasilitas Penerbangan</div>
            <ul className="mt-5">
              <li className="flex items-center mb-3">
                <Image src={Suitcase} alt={""} className={""} />
                <div className="flex-1 ml-1.5">
                  <h3 className="text-xs font-medium">Kabin dan Bagasi</h3>
                  <p className="text-[10px] font-semibold text-[#757575]">
                    Maksimal kabin 7 kg dan bagasi {bookingDetail[0]?.flight.luggage}
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
      </div>
    </>
  );
}

export default Riwayat;
