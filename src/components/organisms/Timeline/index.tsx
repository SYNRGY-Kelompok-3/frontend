import Image from "../../atoms/Img";
import Airline from "../../../assets/Airline.png";

function TimelineOrder() {
    return (
        <>
            <div className="flex">
                <div className="mr-[13px] flex flex-col items-center">
                    <div className="flex h-[13px] w-[13px] items-center justify-center rounded-full border-2 border-blue-500"></div>
                    <div className="w-px flex-1 border border-[#C2C2C2] border-dashed"></div>
                </div>
                <div className="w-full pb-2">
                    <h3 className="text-xs font-medium">Selasa, 02 Januari 2024 - 19.50</h3>
                    <p className="text-[10px] font-semibold text-[#757575] mb-2">Yogyakarta Kulon Progo - YIA</p>
                    <div className="flex items-center rounded border border-[#EDEDED] px-3 py-2">
                        <Image src={Airline} alt={"airline-img"} className={"border-r border/10 border-[#EDEDED] pr-3"} />
                        <div className="flex-1 ml-3">
                            <p className="text-[10px] font-semibold">Citilink</p>
                            <ul className="flex items-center text-[8px] font-semibold text-[#757575]">
                                <li className="mr-1">QC-660</li>
                                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                                <li className="mx-1">Ekonomi</li>
                                <li className="w-[3px] h-[3px] bg-[#757575] rounded-full"></li>
                                <li className="ml-1">2 Jam 30 Menit</li>
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
                    <h3 className="text-xs font-medium">Selasa, 02 Januari 2024 - 23.20</h3>
                    <p className="text-[10px] font-semibold text-[#757575]">Soekarno Hatta - CGK</p>
                </div>
            </div>
        </>
    )
}

export default TimelineOrder;