import { useEffect, useState } from "react";
import Api from "src/services/api";
import { useParams } from "react-router-dom";

import { axiosAuth } from "src/services/axios";
import axios, { AxiosResponse } from "axios";

interface User {
  created_date: string;
  updated_date: string;
  id: number;
  name: string;
  identityNumber: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  profilePicture: string;
  phoneNumber: number;
}

interface airlines {
  id: number;
  airline: string;
  pathLogo: string;
}

interface flight {
  created_date: string;
  updated_date: string;
  id: number;
  airlines: airlines;
  passengerClass: string;
  originAirport: string;
  destinationAirport: string;
  flightNumber: string;
  originCity: string;
  destinationCity: string;
  gate: string;
  flightTime: string;
  arrivedTime: string;
  duration: string;
  transit: string;
  luggage: string;
  freeMeal: string;
  price: number;
  discountPrice: number;
  isDiscount: string;
}

interface Booking {
  created_date: string;
  updated_date: string;
  id: number;
  flight: flight;
  customerName: string;
  phoneNumber: string;
  seatNumber: string | null;
  luggage: string;
  price: number;
  category: string;
  length?: number | null;
  0: {
    flight: flight;
  };
}

interface Bookings {
  created_date: string;
  updated_date: string;
  id: number;
  customer: User;
  email: string;
  phoneNumber: string;
  totalPrice: number;
  paid: string;
  serviceFee: number;
  bankPembayaran: string;
  namaRekening: string;
  nomorRekening: string;
  masaBerlaku: string;
  cvvCvn: string;
  notificationSent: boolean;
  bookingDetail: Booking[];
  addOnSelectingSeat: number;
  addOnLuggagePrice: number | null;
  addOnLuggage: string | null;
}

function RiwayatHooks() {
  const { fetchProfile, user } = Api();
  const [bookings, setBookings] = useState<Bookings[]>([]);
  const [bookingsDetail, setBookingsDetail] = useState<Booking[]>([]);
  const [booking, setBooking] = useState<Bookings>();
  const [bookingDetail, setBookingDetail] = useState<Booking[]>([]);
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await fetchProfile();
      fetchBookings(response.data.data.id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const fetchBookings = async (id?: number) => {
    try {
      const response: AxiosResponse = await axios.get(
        `${axiosAuth.defaults.baseURL}booking/bookingsByCustomerId?customerId=${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setBookings(response.data.data);
      const booking: Booking[] = [];
      for (let i = 0; i < response.data.data.length; i++) {
        booking.push(response.data.data[i].bookingDetail);
      }
      setBookingsDetail(booking.reverse());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const fetchBookingId = async (id?: string) => {
    try {
      const response: AxiosResponse = await axios.get(`${axiosAuth.defaults.baseURL}booking/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBooking(response.data.data);
      const booking: Booking[] = [];
      for (let i = 0; i < response.data.data.bookingDetail.length; i++) {
        booking.push(response.data.data.bookingDetail[i]);
      }
      setBookingDetail(booking);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
    fetchBookings(user.id);
    fetchBookingId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id, id]);

  return {
    bookings,
    bookingsDetail,
    booking,
    bookingDetail,
  };
}

export default RiwayatHooks;
