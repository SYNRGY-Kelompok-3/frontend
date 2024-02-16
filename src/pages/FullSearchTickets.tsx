import { FC } from "react";
import CardTicket from "src/components/organisms/CardTicket";
import FilterFlightTicket from "src/components/organisms/FilterFlightTicket";
import { useGetTicketList } from "src/usecases/modules/tickets";
import FilterHome from "src/components/organisms/FilterHome";
import bgPrimary from "src/assets/bg-2.png";
import { ITicket } from "src/constants";
import Image from "src/components/atoms/Img";
import NotFound from "../assets/Frame 1171276352.png";
import CardSkeletonLoading from "src/components/atoms/CardSkeletonLoading";
import { useScroll } from "src/usecases/common/useScroll";
import { Button } from "flowbite-react";

const FullSearchTickets: FC = () => {
  const { ticketList, isLoading, isLoadingLoadMore, params, loadMore } = useGetTicketList();

  const tickets: ITicket[] = ticketList as ITicket[];
  const { scrollDirection, scrollY } = useScroll();

  return (
    <>
      <div className="mt-5">
        <div
          className={`sticky ${
            scrollDirection === "down" ? "top-[5rem] transition-all" : "top-0 transition-all"
          }  z-20 mx-[20px] sm:mx-10 md:mx-[90px] lg:mx-[125px] xl:mx-[200px] radius-lg rounded-md p-5`}
          style={{
            backgroundImage: `url(${bgPrimary})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
          }}
        >
          <FilterHome isFilterMore={true} />
        </div>

        <div className="flex mx-[20px] sm:mx-10 md:mx-[90px] lg:mx-[125px] xl:mx-[200px] mt-5 justify-between">
          <div className="basis-[20%] sticky top-[12rem]" style={{ height: "130vh", overflowY: "scroll" }}>
            <div className="position-sticky top-[12rem]">
              <h2 className={`justify-self-end text-xl font-medium my-2 ${scrollY > 180 ? "pt-3 pb-3" : ""}`}>
                Filter
              </h2>
              <FilterFlightTicket />
            </div>
          </div>
          <div className="basis-[78%]">
            <h2
              className={`justify-self-end text-xl  font-medium my-2 bg-white ${
                scrollY > 180 ? "pt-10 pb-3 px-3 rounded-lg shadow-md" : ""
              } sticky top-[11rem]`}
            >
              Penerbangan Dari <span className="font-bold">`{params.originCity}` </span>
              ke
              <span className="font-bold">`{params.destinationCity}` </span>
            </h2>
            {isLoading && Array.from({ length: 5 }).map((_, index) => <CardSkeletonLoading key={index} />)}
            {!isLoading && tickets.length > 0
              ? tickets.map((ticket: ITicket, index: number) => {
                  return (
                    <div key={index}>
                      <CardTicket ticketData={ticket} />
                    </div>
                  );
                })
              : tickets.length <= 0 && <Image id={"not-found"} src={NotFound} alt={"Data Not Found"} />}
            {isLoadingLoadMore &&
              Array.from({ length: 3 }).map((_, index) => <CardSkeletonLoading key={index} />)}

            {tickets.length >= 10 && (
              <Button className="w-full z-1" onClick={loadMore}>
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullSearchTickets;
