import { Circle, Minus } from "lucide-react";
import Image from "../../atoms/Img";
import { useDateFormatter } from "src/usecases/common/useDateFormat";
import useAction from "./riwayat.hooks";
const { VITE_APP_API_URL } = import.meta.env;

function TimelineOrder() {
  const { formatDayDateTime } = useDateFormatter();
  const { bookingDetail } = useAction();
  return (
    <div>
      <div className="flex flex-col items-center mb-4 md:flex-row">
        <div className="flex-col items-center hidden mr-4 md:flex">
          <Circle size={13} className="text-blue-500" />
          {[...Array(6)].map((_, index) => (
            <Minus key={index} size={18} className="transform rotate-90 text-[#C2C2C2]" />
          ))}
          <Circle size={13} className="text-blue-500" style={{ fill: "#4299E1" }} />
        </div>
        <div className="flex flex-col w-full">
          <div className="mb-2">
            <p className="text-xs font-medium">{formatDayDateTime(bookingDetail[0]?.flight?.flightTime)}</p>
            <p className="text-[10px] font-semibold text-[#757575]">
              {" "}
              {bookingDetail[0]?.flight?.originCity} - {bookingDetail[0]?.flight?.originAirport}
            </p>
          </div>
          <div className="flex items-center rounded-lg border border-[#EDEDED] px-3 py-2">
            <div className="mr-2">
              <Image
                src={`${VITE_APP_API_URL}showFile/${bookingDetail[0]?.flight?.airlines.pathLogo}`}
                alt={"airline-img"}
                className="w-[100px]"
              />
            </div>
            <div className="h-12 border-r border/10 text-[#EDEDED]"></div>
            <div className="flex flex-col ms-6">
              <p className="text-[10px] font-semibold">{bookingDetail[0]?.flight?.airlines.airline}</p>
              <ul className="flex items-center text-[8px] font-semibold text-[#757575]">
                <li className="mr-1">{bookingDetail[0]?.flight?.flightNumber}</li>
                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                <li className="mx-1">{bookingDetail[0]?.flight?.passengerClass}</li>
                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                <li className="ml-1">{bookingDetail[0]?.flight?.duration}</li>
              </ul>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs font-medium">{formatDayDateTime(bookingDetail[0]?.flight?.arrivedTime)}</p>
            <p className="text-[10px] font-semibold text-[#757575]">
              {" "}
              {bookingDetail[0]?.flight?.destinationCity} - {bookingDetail[0]?.flight?.destinationAirport}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineOrder;
