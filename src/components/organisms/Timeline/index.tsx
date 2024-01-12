import { Circle, Minus } from "lucide-react";
import Image from "../../atoms/Img";
import Airline from "../../../assets/Airline.png";
import { dummy } from "../../../dummy";

function TimelineOrder() {
  const convertDate = (date: string): string => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <>
      {dummy.map(
        ({
          id,
          airline,
          flight_date,
          flight_number,
          flight_class,
          flight_duration,
          depature_airport,
          depature_scheduled,
          arrival_airport,
          arrival_scheduled,
        }) => {
          return (
            <div key={id}>
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
                    <p className="text-xs font-medium">
                      {convertDate(flight_date)} - {arrival_scheduled}
                    </p>
                    <p className="text-[10px] font-semibold text-[#757575]">{arrival_airport}</p>
                  </div>
                  <div className="flex items-center rounded border border-[#EDEDED] px-3 py-2">
                    <div className="mr-2">
                      <Image src={Airline} alt={"airline-img"} className="" />
                    </div>
                    <div className="h-12 border-r border/10 text-[#EDEDED]"></div>
                    <div className="flex flex-col ms-6">
                      <p className="text-[10px] font-semibold">{airline}</p>
                      <ul className="flex items-center text-[8px] font-semibold text-[#757575]">
                        <li className="mr-1">{flight_number}</li>
                        <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                        <li className="mx-1">{flight_class}</li>
                        <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                        <li className="ml-1">
                          {Math.floor(flight_duration / 60)} Jam {flight_duration % 60} Menit
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium">
                      {convertDate(flight_date)} - {depature_scheduled}
                    </p>
                    <p className="text-[10px] font-semibold text-[#757575]">{depature_airport}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}

export default TimelineOrder;
