import Api from "src/services/api";
import { useEffect, useState, useCallback } from "react";
// import { parseISO, formatISO } from "date-fns";

interface Id {
  id: number;
  airline?: string;
  pathLogo?: string;
}

interface Ticket {
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
  const { handleTicket, showTicket } = Api();
  const [formValues, setFormValues] = useState<Ticket>({} as Ticket);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tiket, setTiket] = useState<Ticket[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    fetchTicket(page);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
    fetchTicket(page);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, callback?: () => void) => {
    try {
      e.preventDefault();
      const departure = `${departureDate}:00.000+0700`;
      const arrival = `${arrivalDate}:00.000+0700`;
      const payload = { ...formValues, flightTime: departure, arrivedTime: arrival };
      const response = await handleTicket(payload);
      console.log(response);
      callback && callback();
    } catch (error) {
      console.log("error >", error);
    }
  };

  const fetchTicket = useCallback(
    async (page: number) => {
      try {
        const response = await showTicket(page, 10);
        setTiket(response.content);
        setTotalPage(response.totalPages);
      } catch (error) {
        console.log("error > ", error);
      }
    },
    [showTicket]
  );

  useEffect(() => {
    fetchTicket(page);
  }, [page, fetchTicket]);

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
    tiket,
    totalPage,
    page,
    handleNextPage,
    handlePreviousPage,
  };
}

export default TicketHooks;
