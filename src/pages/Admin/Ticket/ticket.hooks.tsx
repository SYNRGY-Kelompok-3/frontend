import Api from "src/services/api";
import { useEffect, useState } from "react";
import { axiosApi } from "src/services/axios";
import axios, { AxiosResponse } from "axios";
import { differenceInMinutes } from "date-fns";

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
  const { handleTicket, handleUpdateTicket, handleDeleteTicket } = Api();
  const [formValues, setFormValues] = useState<Ticket>({} as Ticket);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [data, setData] = useState<Ticket>({} as Ticket);

  const handleCloseModal = () => {
    setCreateModal(false);
    setEditModal(false);
    setDeleteModal(false);
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
      const differenceInMinutesValue = differenceInMinutes(arrivalDate, departureDate);
      const hours = Math.floor(differenceInMinutesValue / 60);
      const minutes = differenceInMinutesValue % 60;
      const totalDuration = `${hours} hours${minutes === 0 ? null : ` ${minutes} minutes`}`;
      const payload = { ...formValues, flightTime: departure, arrivedTime: arrival, duration: totalDuration };
      const response = await handleTicket(payload);
      console.log(totalDuration);
      console.log(response);
      fetchTicket(page);
      callback && callback();
    } catch (error) {
      console.log("error >", error);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>, id: number, callback?: () => void) => {
    e.preventDefault();
    try {
      if (!departureDate || !arrivalDate) {
        const payload = { ...formValues };
        const response = await handleUpdateTicket(payload, id);
        console.log(response?.data.message + " Update!");
        fetchTicket(currentPage);
        callback && callback();
      } else {
        const departure = `${departureDate}:00.000+0700`;
        const arrival = `${arrivalDate}:00.000+0700`;
        const differenceInMinutesValue = differenceInMinutes(arrivalDate, departureDate);
        const hours = Math.floor(differenceInMinutesValue / 60);
        const minutes = differenceInMinutesValue % 60;
        const totalDuration = `${hours} hours${minutes === 0 ? "" : ` ${minutes} minutes`}`;
        const payload = {
          ...formValues,
          flightTime: departure,
          arrivedTime: arrival,
          duration: totalDuration,
        };
        const response = await handleUpdateTicket(payload, id);
        console.log(response);
        fetchTicket(currentPage);
        callback && callback();
      }
    } catch (error) {
      console.log("error >", error);
    }
  };

  const handleDelete = async (id: number, callback?: () => void) => {
    try {
      const response = await handleDeleteTicket(id);
      fetchTicket(currentPage);
      console.log(response?.data.message + " Delete!");
      callback && callback();
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

  const fetchTicketId = async (id: number) => {
    try {
      const response: AxiosResponse = await axios.get(`${axiosApi.defaults.baseURL}flight/${id}`);
      return response.data.data;
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchTicket(currentPage);
  }, [currentPage]);

  return {
    createModal,
    setCreateModal,
    editModal,
    setEditModal,
    deleteModal,
    setDeleteModal,
    id,
    setId,
    handleCloseModal,
    formValues,
    setFormValues,
    handleSubmit,
    handleUpdate,
    setDepartureDate,
    setArrivalDate,
    fetchTicket,
    tickets,
    totalPages,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleDelete,
    data,
    setData,
    fetchTicketId,
  };
}

export default TicketHooks;
