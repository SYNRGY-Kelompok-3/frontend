import Api from "src/services/api";
import { useEffect, useState } from "react";
import { axiosApi } from "src/services/axios";
import axios, { AxiosResponse } from "axios";

interface Id {
  id: number;
  airline?: string;
  pathLogo?: string;
}

interface Ticket {
  id: number;
  passengerClass: string;
  originAirport: string;
  destinationAirport: string;
  airlines: Id;
  flightNumber: string;
  originCity: string;
  destinationCity: string;
  gate: string;
  flightTime: string;
  arrivedTime: string;
  duration: string;
  transit: string;
  freeMeal: boolean;
  price: number;
  discountPrice: number;
  isDiscount: boolean;
}

function TicketHooks() {
  const { handleTicket } = Api();
  const [formValues, setFormValues] = useState<Ticket>({} as Ticket);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleCloseModal = () => {
    setShowModal(false);
    fetchTicket(currentPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchTicket(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchTicket(prevPage);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, page: number, callback?: () => void) => {
    e.preventDefault();
    try {
      const departure = `${departureDate}:00.000+0700`;
      const arrival = `${arrivalDate}:00.000+0700`;
      const payload = { ...formValues, flightTime: departure, arrivedTime: arrival };
      const response = await handleTicket(payload);
      console.log(response);
      fetchTicket(page);
      callback && callback();
    } catch (error) {
      console.log("error >", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const payload = { id: id };
      const response: AxiosResponse = await axios.delete(`${axiosApi.defaults.baseURL}flight/delete`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: payload,
      });
      fetchTicket(currentPage);
      console.log(response);
    } catch (error) {
      console.log("error >", error);
    }
  };

  const fetchTicket = async (page: number) => {
    try {
      const response: AxiosResponse = await axios.get(
        `${axiosApi.defaults.baseURL}flight/listFlights?page=${page}&size=${10}`
      );
      setTickets(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchTicket(currentPage);
  }, [currentPage]);

  return {
    showModal,
    setShowModal,
    handleCloseModal,
    formValues,
    setFormValues,
    handleSubmit,
    setDepartureDate,
    setArrivalDate,
    fetchTicket,
    tickets,
    totalPages,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleDelete,
  };
}

export default TicketHooks;
