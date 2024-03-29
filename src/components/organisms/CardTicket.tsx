import { Card } from "flowbite-react";
import { memo } from "react";
import Image from "src/components/atoms/Img";
import transitIcon from "src/assets/no-transit-icon.svg";
import DetailTiket from "src/components/organisms/PopUp/detailTicket";
import Button from "src/components/atoms/Button";
import { useCardTicket } from "src/usecases/modules/tickets";
import { ITicket, TTransit, transitText } from "src/constants";
import { priceFormatter } from "src/utils";
import { useDateFormatter } from "src/usecases/common/useDateFormat";

type TProps = {
  ticketData: ITicket;
};

const { VITE_APP_API_URL } = import.meta.env;

const CardTicket = memo((data: TProps) => {
  const { ticketData } = data;
  const { onShowTicketDetail, showModalDetailTicket, onCloseTicketDetail } = useCardTicket();
  const { formatDay, formatTime, formatFlightDuration } = useDateFormatter();
  return (
    <>
      <Card className="mb-3 rounded-xl">
        <div className="flex flex-row items-center -m-3 gap-3 h-[136px]">
          <div className="basis-[25.00%] flex justify-center h-full">
            <Image src={`${VITE_APP_API_URL}showFile/${ticketData?.airlines?.pathLogo}`} alt="template" />
          </div>
          <div className="basis-[50.00%] h-full flex flex-col justify-between">
            <div className="grid grid-cols-3">
              <div className="grid grid-rows-3 items-center gap-2">
                <div className="justify-self-center">{formatDay(ticketData.flightTime)}</div>
                <div className="justify-self-center font-semibold text-lg">
                  {formatTime(ticketData.flightTime)}{" "}
                </div>
                <div className="justify-self-center">{ticketData.originAirport}</div>
              </div>
              <div className="grid grid-rows-3 items-center">
                <div className="justify-self-center text-green-600">
                  {transitText[ticketData.transit as TTransit]}
                </div>
                <div className="justify-self-center">
                  <img src={transitIcon} alt="tes" />
                </div>
                <div className="justify-self-center">
                  {formatFlightDuration(ticketData.arrivedTime, ticketData.flightTime)}
                </div>
              </div>
              <div className="grid grid-rows-3 items-center">
                <div className="justify-self-center">{formatDay(ticketData.arrivedTime)}</div>
                <div className="justify-self-center font-semibold text-lg">
                  {formatTime(ticketData.arrivedTime)}{" "}
                </div>
                <div className="justify-self-center">{ticketData.destinationAirport}</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <span className="border-2 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300 text-center">
                Kabin & Bagasi
              </span>
              <span className="border-2 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300 text-center">
                Gratis Makan
              </span>
            </div>
          </div>
          <div className="basis-[25.00%] h-full">
            <div className="flex flex-col justify-between h-full text-end">
              <div>
                <h4 className="justify-self-end text-md text-gray-500  text-end">
                  {priceFormatter(ticketData.price)}
                </h4>
              </div>
              <div>
                <h2 className="justify-self-end text-xl text-red-500 font-medium">
                  {priceFormatter(ticketData.discountPrice)}/pax
                </h2>
              </div>
              <Button
                id={"detail-tiket"}
                content={"Lihat Detail"}
                className={"  self-stretch p-3 rounded-lg bg-[#3e7bfa] text-white"}
                onClick={() => onShowTicketDetail(ticketData.id)}
              />
            </div>
          </div>
        </div>
      </Card>
      {showModalDetailTicket && <DetailTiket onClose={onCloseTicketDetail} ticketId={ticketData.id} />}
    </>
  );
});

export default CardTicket;
