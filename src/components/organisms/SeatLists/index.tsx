import React from "react";
import Check from "../../atoms/Icon/Check";
import Seat from "../../atoms/Seat";
import { rows, emptySeats, seatPrice } from "./helpers";

export interface SeatProps {
  seat: string;
  row: string;
  price?: number;
}

interface seatStateProps {
  selectedSeats: SeatProps[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<SeatProps[]>>;
}

const SeatLists = ({ selectedSeats, setSelectedSeats }: seatStateProps) => {
  // Checks if the seat is empty
  const isSeatEmpty = (seat: string, row: string) => emptySeats.includes(`${seat}${row}`);

  // Checks the category of a seat
  const getSeatCategory = (seat: string, row: string) =>
    Object.entries(seatPrice).find(([, data]) => data.seats.includes(`${seat}${row}`));

  // To filter the selected seats
  const handleClick = (seat: string, row: string) => {
    const seatCategory = getSeatCategory(seat, row);
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.seat === seat && selectedSeat.row === row
    );

    if (seatCategory && !isSelected) {
      const [, data] = seatCategory;
      setSelectedSeats([...selectedSeats, { seat, row, price: data.price }]);
    } else if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => !(selectedSeat.seat === seat && selectedSeat.row === row))
      );
    }
  };

  //   Renders empty seats
  const renderEmptySeat = (key: string) => (
    <div className="w-[41px] h-[41px] mr-2 bg-gray-300 rounded-lg" key={key} />
  );

  //   Renders seat according to its category
  const renderSeatWithCategory = (key: string) => {
    const seatCategory = Object.entries(seatPrice).find(([, data]) => data.seats.includes(key));
    const isSelected = selectedSeats.some((selectedSeat) => selectedSeat.seat + selectedSeat.row === key);

    if (seatCategory) {
      const [, data] = seatCategory;
      return (
        <div
          className={`w-[41px] h-[41px] mr-2 justify-center ${
            isSelected ? "bg-gray-300 border-blue-300 border-2" : data.color
          } rounded-lg flex items-center cursor-pointer hover:scale-105 transition duration-150`}
          key={key}
          onClick={() => handleClick(key[0], key[1])}
        >
          {isSelected ? <Check /> : key}
        </div>
      );
    }
  };

  //   Renders seat according to given condition
  const renderSeat = ({ seat, row }: SeatProps) => {
    const key = `${seat}${row}`;

    if ((seat === "A" || seat === "F") && row === "1") {
      return <div className="w-[41px] h-[41px] mr-2" key={key} />;
    }

    return isSeatEmpty(seat, row) ? renderEmptySeat(key) : renderSeatWithCategory(key);
  };

  return (
    <div className="flex justify-center">
      <Seat renderSeat={renderSeat} rows={rows} />
    </div>
  );
};

export default SeatLists;
