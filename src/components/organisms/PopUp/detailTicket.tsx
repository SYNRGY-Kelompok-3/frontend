import { Briefcase, ChevronDown, ChevronUp, Circle, X, Minus, Sandwich } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { axiosAuth } from "src/services/axios";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/organisms/Loading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/state/store";
import { setDetailTicket } from "src/state/ticketSlice/ticketList";
interface FlightData {
  created_date: string;
  updated_date: string;
  id: number;
  airlines: {
    id: number;
    airline: string;
    pathLogo: string;
  };
  passengerClass: string;
  originAirport: string;
  destinationAirport: string;
  flightNumber: string;
  originCity: string;
  destinationCity: string;
  gate: string;
  flightTime: string;
  arrivedTime: string;
  duration: string;
  transit: string;
  luggage: string;
  freeMeal: boolean;
  price: number;
  discountPrice: number;
  isDiscount: boolean;
}

interface DetailTiketProps {
  onClose: () => void;
  ticketId: number;
}

function DetailTiket({ onClose, ticketId }: DetailTiketProps) {
  const dispatch = useDispatch<AppDispatch>();
  function formatDate(dateString: string | undefined) {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return formattedDate + " - " + hours + "." + minutes;
  }

  function formatPrice(price: number | undefined): string {
    if (!price) return "";
    return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  }

  const [accordionOpen, setAccordionOpen] = useState(false);
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  const navigate = useNavigate();

  // Loader
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visibility (1s)
      navigate(
        `/checkout?flightId=${flightData?.id}&flightClass=${flightData?.passengerClass}&airlinesId=${flightData?.airlines?.id}&airline=${flightData?.airlines?.airline}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchFlightData(ticketId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketId]);

  const fetchFlightData = async (ticketId: number) => {
    try {
      const response = await axios.get(`${axiosAuth.defaults.baseURL}flight/${ticketId}`);
      const data = response.data;
      await dispatch(setDetailTicket(data.data));
      setFlightData(data.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  const toggleAccordion = () => {
    setTimeout(() => {
      setAccordionOpen(!accordionOpen);
    }, 0);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
          <div className="p-4 bg-white rounded-lg sm:p-8 md:p-12 lg:w-[700px] xl:w-[800px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-black">
                Penerbangan Dari {flightData?.originCity} ke {flightData?.destinationCity}
              </h1>
              <button onClick={onClose} className="text-black">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="mb-4">
              <div className="flex flex-col items-center mb-4 md:flex-row">
                {/* Kolom Kiri (hanya ditampilkan di layar besar) */}
                <div className="flex-col items-center hidden mr-4 md:flex">
                  <Circle size={18} className="text-blue-500" />
                  {[...Array(6)].map((_, index) => (
                    <Minus key={index} size={18} className="transform rotate-90 text-slate-400" />
                  ))}
                  <Circle size={18} className="text-blue-500" style={{ fill: "#4299E1" }} />
                </div>

                {/* Kolom Kanan */}
                <div className="flex flex-col w-full">
                  {/* Teks pertama */}
                  <div className="mb-2">
                    <p className="font-medium text-black" style={{ fontSize: "14px" }}>
                      {formatDate(flightData?.flightTime)}
                    </p>
                    <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                      {flightData?.originCity} - {flightData?.originAirport}
                    </p>
                  </div>

                  {/* Kotak atau banner */}
                  <div className="flex items-center w-full mt-2 border-2 rounded-md border-slate-200">
                    <div className="mr-2">
                      <img
                        src={`${axiosAuth.defaults.baseURL}showFile/${flightData?.airlines.pathLogo}`}
                        alt={flightData?.airlines.airline}
                        className="object-contain w-20 h-12"
                      />
                    </div>

                    {/* Garis Vertikal */}
                    <div className="h-16 mx-2 border-l text-slate-400"></div>

                    {/* Kolom Kedua */}
                    <div className="flex flex-col ms-2">
                      <p className="font-medium text-black" style={{ fontSize: "14px" }}>
                        {flightData?.airlines.airline}
                      </p>
                      <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                        {flightData?.flightNumber} • {flightData?.passengerClass} • {flightData?.duration}
                      </p>
                    </div>
                  </div>

                  {/* Teks kedua */}
                  <div className="mt-2">
                    <p className="mt-2 font-medium text-black" style={{ fontSize: "14px" }}>
                      {formatDate(flightData?.arrivedTime)}
                    </p>
                    <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                      {flightData?.destinationCity} - {flightData?.destinationAirport}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="mb-6" />

              {/* Accordion */}
              <details className="mb-6" open={accordionOpen}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-xl font-bold text-black">Fasilitas Penerbangan</h2>
                  {accordionOpen ? (
                    <ChevronUp size={24} className="ml-2 text-black" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-black" />
                  )}
                </summary>

                <div className="flex flex-col gap-4 mt-4 mb-2">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Briefcase size={24} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="mb-1 font-medium text-black" style={{ fontSize: "14px" }}>
                        Kabin dan Bagasi
                      </div>
                      <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                        Maksimal Kabin 7 kg dan Bagasi {flightData?.luggage}.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Sandwich size={24} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="mb-1 font-medium text-black" style={{ fontSize: "14px" }}>
                        Gratis Makan
                      </div>
                      <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                        {flightData?.freeMeal
                          ? "Sudah termasuk gratis makan. Pembelian makanan tambahan tidak tersedia di halaman pemesanan."
                          : "Pembelian makanan tambahan tersedia."}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            <hr />

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="font-bold text-black text-md sm:text-sm">Total</p>
                <div className="flex flex-col text-lg font-bold text-blue-500 sm:text-md sm:flex-row">
                  <p>
                    {flightData?.isDiscount
                      ? formatPrice(flightData?.discountPrice)
                      : formatPrice(flightData?.price)}
                  </p>
                  <p className="font-bold text-black sm:ml-2">/pax</p>
                </div>
              </div>
              <button className="px-5 py-3 text-white bg-blue-500 rounded" onClick={handleCheckout}>
                Pesan Tiket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailTiket;
