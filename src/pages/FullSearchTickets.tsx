import React from "react";
import CardTicket from "src/components/organisms/CardTicket";
import FilterFlightTicket from "src/components/organisms/FilterFlightTicket";
import { useGetTicketList } from "src/usecases/modules/tickets";
import FilterHome from "src/components/organisms/FilterHome";
import bgPrimary from "src/assets/bg-2.png";
import { ITicket } from "src/constants";
import Image from "src/components/atoms/Img";
import NotFound from "../assets/Frame 1171276352.png";
import CardSkeletonLoading from "src/components/atoms/CardSkeletonLoading";

const FullSearchTickets: React.FC = () => {
  const { ticketList, isLoading, params } = useGetTicketList();
  const tickets: ITicket[] = ticketList as ITicket[];
  return (
    <>
      <div className="mx-auto mt-5">
        <div
          className="w-10/12 mx-auto relative radius-lg rounded-md px-5 py-3"
          style={{
            backgroundImage: `url(${bgPrimary})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <FilterHome isFilterMore={true} />
        </div>

        <div className="flex  w-10/12 mx-auto mt-5">
          <div className="basis-[20%]">
            <h2 className="justify-self-end text-xl  font-medium my-2">Filter</h2>
            <FilterFlightTicket />
          </div>
          <div className="basis-[80%]">
            <h2 className="justify-self-end text-xl  font-medium my-2">
              Penerbangan Dari <span className="font-bold">`{params.originCity}` </span>
              ke
              <span className="font-bold">`{params.destinationCity}` </span>
            </h2>
            {isLoading && Array.from({ length: 5 }).map((_, index) => <CardSkeletonLoading key={index} />)}

            {!isLoading && tickets.length > 0
              ? tickets.map((ticket: ITicket) => {
                  return (
                    <div key={ticket.id}>
                      <CardTicket ticketData={ticket} />
                    </div>
                  );
                })
              : tickets.length <= 0 && <Image id={"not-found"} src={NotFound} alt={"Data Not Found"} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullSearchTickets;
