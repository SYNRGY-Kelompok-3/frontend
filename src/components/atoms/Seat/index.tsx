import { useEffect, useState } from "react";
import SmallRectangle from "../Icon/SmallRectangle";
import { fetchSeat, seatPrice } from "src/components/organisms/SeatLists/helpers";
import { useParams } from "react-router-dom";

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

  const { flightId, passengerClass, airline } = useParams();

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
  }

  return (
    // Map the seat lists according to rows
    <div className="w-[324px]  font-semibold text-black pt-[312px] pl-2 relative h-fit">
      <div className="flex justify-between bg-white">
        {!loaded ? (
          <p className="w-full text-center">Loading seats ...</p>
        ) : (
          <>
            <div>
              {Array.from({ length: rows }, (_, index) => {
                if (
                  (passengerClass === "business" && index < 7) ||
                  (passengerClass === "economy" && airline === "Garuda" && index > 6)
                ) {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
                      {["A", "B", "C"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else if (passengerClass === "economy" && airline !== "Garuda") {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
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

            <div>
              {Array.from({ length: rows }, (_, index) => {
                if (
                  (passengerClass === "business" && index < 7) ||
                  (passengerClass === "economy" && airline === "Garuda" && index > 6)
                ) {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
                      {["D", "E", "F"].map((seat) => renderSeat({ seat, row: index + 1 }))}
                    </div>
                  );
                } else if (passengerClass === "economy" && airline !== "Garuda") {
                  return (
                    <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
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
