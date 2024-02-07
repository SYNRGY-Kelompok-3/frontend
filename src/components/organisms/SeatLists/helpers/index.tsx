import { axiosAuth } from "src/services/axios";
import axios from "axios";

interface SeatAttribute {
  seatBooked: string[];
}

const rows = 22;

let emptySeats: string[] = [];

export const fetchSeat = async (flightId: number) => {
  try {
    const response = await axios.get(`${axiosAuth.defaults.baseURL}seat/getByFlight/${flightId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const seatData = response.data.data.map((seat: SeatAttribute) => seat.seatBooked);
    emptySeats = seatData;
  } catch (error) {
    return null;
  }
};

const blueSeats: string[] = [];
const greenSeats: string[] = [];
const yellowSeats: string[] = [];
const purpleSeats: string[] = [];

for (let i = 1; i <= rows; i++) {
  ["A", "B", "C", "D", "E", "F"].map((seat) => {
    if (i >= 1 && i <= 3) {
      emptySeats.includes(`${seat}${i}`) ? "" : blueSeats.push(`${seat}${i}`);
    } else if (i >= 4 && i <= 7) {
      emptySeats.includes(`${seat}${i}`) ? "" : yellowSeats.push(`${seat}${i}`);
    } else if (i > 7 && (seat === "B" || seat === "E")) {
      emptySeats.includes(`${seat}${i}`) ? "" : purpleSeats.push(`${seat}${i}`);
    } else {
      emptySeats.includes(`${seat}${i}`) ? "" : greenSeats.push(`${seat}${i}`);
    }
  });
}

const seatPrice = {
  green: {
    price: 85000,
    seats: greenSeats,
    color: "bg-green-500",
  },
  blue: {
    price: 250000,
    seats: blueSeats,
    color: "bg-blue-500",
  },
  yellow: {
    price: 195000,
    seats: yellowSeats,
    color: "bg-yellow-300",
  },
  purple: {
    price: 75000,
    seats: purpleSeats,
    color: "bg-purple-600",
  },
};

export { rows, emptySeats, seatPrice };
