import { useEffect, useState } from "react";
import SmallRectangle from "../Icon/SmallRectangle";
import { fetchSeat, seatPrice } from "src/components/organisms/SeatLists/helpers";
import { useLocation } from "react-router-dom";

interface SeatType {
  seat: string;
  row: number;
}

interface SeatProps {
  rows: number;
  // eslint-disable-next-line no-unused-vars
  renderSeat: ({ seat, row }: SeatType) => JSX.Element | undefined;
}

const Seat = ({ rows, renderSeat }: SeatProps) => {
  const [loaded, setLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const flightId = searchParams.get("flightId");
  const passengerClass = searchParams.get("flightClass");
  const airline = searchParams.get("airline");

  const airlinveVar = airline?.split(" ")[0];

  useEffect(() => {
    const fetchData = async () => {
      await fetchSeat(Number(flightId));
      setLoaded(true);
    };

    if (!loaded) {
      fetchData();
    }
  }, [loaded, flightId]);

  if (passengerClass === "business") {
    seatPrice.blue.color = "bg-white";
    seatPrice.yellow.color = "bg-white";
    seatPrice.blue.price = 0;
    seatPrice.yellow.price = 0;
  } else {
    seatPrice.blue.color = "bg-blue-500";
    seatPrice.yellow.color = "bg-yellow-300";
    seatPrice.blue.price = 250000;
    seatPrice.yellow.price = 195000;
  }

  return (
    // Map the seat lists according to rows
    <div className="w-[324px] font-semibold text-black pt-[180px] relative h-fit">
      <div className="flex justify-between bg-white mx-2">
        {!loaded ? (
          <p className="w-full text-center">Loading seats ...</p>
        ) : (
          <>
            <div className="">
              {Array.from({ length: rows }, (_, index) => {
                if (
                  (passengerClass === "business" && index < 7) ||
                  (passengerClass === "economy" && airlinveVar === "Garuda" && index > 6)
                ) {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center gap-2 mb-4">
                      {["A", "B", "C"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else if (passengerClass === "economy" && airlinveVar !== "Garuda") {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center gap-2 mb-4">
                      {["A", "B", "C"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              {/* Seats Footer */}
              <div className="flex">
                <p className="w-[41px] h-[41px] mr-2 text-center">A</p>
                <p className="w-[41px] h-[41px] mr-2 text-center">B</p>
                <p className="w-[41px] h-[41px] mr-2 text-center">C</p>
              </div>
            </div>

            <div className="">
              {Array.from({ length: rows }, (_, index) => {
                if (
                  (passengerClass === "business" && index < 7) ||
                  (passengerClass === "economy" && airlinveVar === "Garuda" && index > 6)
                ) {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center gap-2 mb-4">
                      {["D", "E", "F"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else if (passengerClass === "economy" && airlinveVar !== "Garuda") {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center gap-2 mb-4">
                      {["D", "E", "F"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              <div className="flex">
                <p className="w-[41px] h-[41px] mr-2 text-center">D</p>
                <p className="w-[41px] h-[41px] mr-2 text-center">E</p>
                <p className="w-[41px] h-[41px] mr-2 text-center">F</p>
              </div>
            </div>
          </>
        )}
      </div>

      <SmallRectangle className="absolute left-0 top-[300px]" />
      <SmallRectangle className="absolute right-0 top-[300px]" />
    </div>
  );
};

export default Seat;
