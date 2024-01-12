const rows = ["1", "2", "3", "4", "5", "6"];

const emptySeats = ["A1", "A2", "B3", "B5", "D6", "E4"];

const seatPrice = {
  green: {
    price: 85000,
    seats: ["A3", "A4", "A5", "A6", "C3", "C4", "C5", "C6", "D3", "D4", "D5", "F3", "F4", "F5", "F6"],
    color: "bg-green-600",
  },
  blue: {
    price: 250000,
    seats: ["B1", "C1", "D1", "E1"],
    color: "bg-blue-500",
  },
  yellow: {
    price: 195000,
    seats: ["B2", "C2", "D2", "E2", "F2"],
    color: "bg-yellow-400",
  },
  purple: {
    price: 75000,
    seats: ["B4", "B6", "E3", "E5", "E6"],
    color: "bg-purple-500",
  },
};

export { rows, emptySeats, seatPrice };
