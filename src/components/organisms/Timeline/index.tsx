import { Circle, Minus } from "lucide-react";
import Image from "../../atoms/Img";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { useDateFormatter } from "src/usecases/common/useDateFormat";
const { VITE_APP_API_URL } = import.meta.env;

function TimelineOrder() {
  const { detailTicket } = useSelector((state: RootState) => state.ticket);
  const { formatDayDateTime } = useDateFormatter();
  return (
    <div key={detailTicket.id}>
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
            <p className="text-xs font-medium">{formatDayDateTime(detailTicket.arrivedTime as Date)}</p>
            <p className="text-[10px] font-semibold text-[#757575]">
              {" "}
              {detailTicket.destinationCity} - {detailTicket.destinationAirport}
            </p>
          </div>
          <div className="flex items-center rounded border border-[#EDEDED] px-3 py-2">
            <div className="mr-2">
              <Image
                src={`${VITE_APP_API_URL}showFile/${detailTicket.airlines.pathLogo}`}
                alt={"airline-img"}
                className="w-[100px]"
              />
            </div>
            <div className="h-12 border-r border/10 text-[#EDEDED]"></div>
            <div className="flex flex-col ms-6">
              <p className="text-[10px] font-semibold">{detailTicket.airlines.airline}</p>
              <ul className="flex items-center text-[8px] font-semibold text-[#757575]">
                <li className="mr-1">{detailTicket.flightNumber}</li>
                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                <li className="mx-1">{detailTicket.passengerClass}</li>
                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                <li className="ml-1">{detailTicket.duration}</li>
              </ul>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs font-medium">{formatDayDateTime(detailTicket.flightTime as Date)}</p>
            <p className="text-[10px] font-semibold text-[#757575]">
              {" "}
              {detailTicket.originCity} - {detailTicket.originAirport}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineOrder;
