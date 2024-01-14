import { Card } from "flowbite-react";
import Image from "src/components/atoms/Img";
import transitIcon from "src/assets/no-transit-icon.svg";
import DetailTiket from "src/components/organisms/PopUp/detailTicket";
import Button from "src/components/atoms/Button";
import { useCardTicket } from "src/usecases/modules/tickets";

type Props = {
  title: string;
};

const CardTicket = (props: Props) => {
  console.log(props);
  const { onShowTicketDetail, showModalDetailTicket, onCloseTicketDetail } = useCardTicket();

  return (
    <>
      <Card className="mb-3">
        <div className="flex flex-row  items-center ">
          <div className="basis-[25.00%] m-2">
            <Image src="https://placehold.co/400x200" alt="template" />
          </div>

          <div className="basis-[50.00%] m-2 px-5">
            <div className="grid grid-cols-3 ">
              <div className="grid grid-rows-3 ">
                <div className="justify-self-center">Jumat</div>
                <div className="justify-self-center font-semibold text-lg">19:50</div>
                <div className="justify-self-center">YIA</div>
              </div>
              <div className="grid grid-rows-3 my-3">
                <div className="justify-self-center text-green-600">Tanpa Transit</div>
                <div className="justify-self-center">
                  <img src={transitIcon} alt="tes" />
                </div>
                <div className="justify-self-center">2 Jam 30 Menit</div>
              </div>
              <div className="grid grid-rows-3">
                <div className="justify-self-center">Sabtu</div>
                <div className="justify-self-center font-semibold text-lg">22:45</div>
                <div className="justify-self-center">CGA</div>
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <span className="border-2 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 text-center">
                Kabin & Bagasi
              </span>
              <span className="border-2 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 text-center">
                Gratis Makan
              </span>
            </div>
          </div>
          <div className="basis-[25.00%] m-2">
            <div className="grid grid-rows-1 text-end">
              <h4 className="justify-self-end text-md text-gray-500  text-end">Rp2.000.000</h4>
              <h2 className="justify-self-end text-xl text-red-500 font-medium my-2">Rp1.500.000/pax</h2>

              <Button
                content={"Lihat Detail"}
                className={"  self-stretch p-3 rounded bg-[#3e7bfa]"}
                onClick={onShowTicketDetail}
              />
            </div>
          </div>
        </div>
      </Card>
      {showModalDetailTicket && <DetailTiket onClose={onCloseTicketDetail} />}
    </>
  );
};

export default CardTicket;
