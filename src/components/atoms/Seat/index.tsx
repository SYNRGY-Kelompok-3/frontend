import { useEffect, useState } from "react";
import SmallRectangle from "../Icon/SmallRectangle";
import { fetchSeat } from "src/components/organisms/SeatLists/helpers";

interface SeatType {
  seat: string;
  row: number;
}

interface SeatProps {
  rows: number;
  // eslint-disable-next-line no-unused-vars
  renderSeat: ({ seat, row }: SeatType) => JSX.Element | undefined;
}

export const flightId = 1;

const Seat = ({ rows, renderSeat }: SeatProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSeat();
      setLoaded(true);
    };

    if (!loaded) {
      fetchData();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    // Map the seat lists according to rows
    <div className="w-[324px]  font-semibold text-black pt-[312px] pl-2 relative h-fit">
      <div className="flex justify-between bg-white">
        <div>
          {Array.from({ length: rows }, (_, index) => (
            <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
              {["A", "B", "C"].map((seat) => renderSeat({ seat, row: index + 1 }))}
            </div>
          ))}
          {/* Seats Footer */}
          <div className="flex">
            <p className="w-[41px] h-[41px] mr-2 text-center">A</p>
            <p className="w-[41px] h-[41px] mr-2 text-center">B</p>
            <p className="w-[41px] h-[41px] mr-2 text-center">C</p>
          </div>
        </div>

        <div>
          {Array.from({ length: rows }, (_, index) => (
            <div key={`column1-${index + 1}`} className="flex items-center justify-center mb-4 ">
              {["D", "E", "F"].map((seat) => renderSeat({ seat, row: index + 1 }))}
            </div>
          ))}
          <div className="flex">
            <p className="w-[41px] h-[41px] mr-2 text-center">D</p>
            <p className="w-[41px] h-[41px] mr-2 text-center">E</p>
            <p className="w-[41px] h-[41px] mr-2 text-center">F</p>
          </div>
        </div>
      </div>

      <SmallRectangle className="absolute left-0 top-[300px]" />
      <SmallRectangle className="absolute right-0 top-[300px]" />
    </div>
  );
};

export default Seat;
