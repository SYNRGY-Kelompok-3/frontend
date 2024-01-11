import Image from "../../atoms/Img";
import Airline from "../../../assets/Airline.png";
import { dummy } from "../../../dummy";

function TimelineOrder() {
    const convertDate = (date: string): string => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('id-ID', options);
    };

    return (
        <>
            {dummy.map(({
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
            }) =>  {
                return (
                    <div key={id}>
                        <div className="flex">
                            <div className="mr-[13px] flex flex-col items-center">
                                <div className="flex h-[13px] w-[13px] items-center justify-center rounded-full border-2 border-blue-500"></div>
                                <div className="w-px flex-1 border border-[#C2C2C2] border-dashed"></div>
                            </div>
                            <div className="w-full pb-2">
                                <h3 className="text-xs font-medium">{convertDate(flight_date)} - {arrival_scheduled}</h3>
                                <p className="text-[10px] font-semibold text-[#757575] mb-2">{arrival_airport}</p>
                                <div className="flex items-center rounded border border-[#EDEDED] px-3 py-2">
                                    <Image src={Airline} alt={"airline-img"} className={"border-r border/10 border-[#EDEDED] pr-3"} />
                                    <div className="flex-1 ml-3">
                                        <p className="text-[10px] font-semibold">{airline}</p>
                                        <ul className="flex items-center text-[8px] font-semibold text-[#757575]">
                                            <li className="mr-1">{flight_number}</li>
                                            <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                                            <li className="mx-1">{flight_class}</li>
                                            <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                                            <li className="ml-1">{Math.floor(flight_duration/60)} Jam {flight_duration%60} Menit</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-[13px] flex flex-col items-center">
                                <div className="flex h-[13px] w-[13px] items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500"></div>
                            </div>
                            <div className="pt-1 ">
                                <h3 className="text-xs font-medium">{convertDate(flight_date)} - {depature_scheduled}</h3>
                                <p className="text-[10px] font-semibold text-[#757575]">{depature_airport}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TimelineOrder;