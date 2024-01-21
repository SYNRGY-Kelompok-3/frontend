import React from "react";
import CardTicket from "src/components/organisms/CardTicket";
import FilterFlightTicket from "src/components/organisms/FilterFlightTicket";
import { useGetTickets } from "src/usecases/modules/tickets";
import FilterHome from "src/components/organisms/FilterHome";
import bgPrimary from "src/assets/bg-2.png";
import { ITicket } from "src/state/ticketSlice/slice";

const FullSearchTickets: React.FC = () => {
  const { ticketList, isLoading } = useGetTickets();
  const tickets: ITicket[] = ticketList as ITicket[];
  return (
    <>
      <div className="mx-auto mt-5">
        <div
          className="w-10/12   mx-auto relative radius-lg  rounded-md px-5 pt-3"
          style={{
            backgroundImage: `url(${bgPrimary})`,
            height: "190px",
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
            <h2 className="justify-self-end text-xl  font-medium my-2">Penerbangan Dari `A` ke `B`</h2>
            {!isLoading &&
              tickets.map((ticket: ITicket) => {
                return (
                  <>
                    <div key={ticket.id}>
                      <CardTicket ticketData={ticket} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullSearchTickets;
