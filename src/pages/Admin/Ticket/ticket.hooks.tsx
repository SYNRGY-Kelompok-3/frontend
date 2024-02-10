import Api from "src/services/api";
import { useState } from "react";
import { parseISO, formatISO } from "date-fns";

interface Id {
  id: number;
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
  const { handleTicket } = Api();
  const [formValues, setFormValues] = useState<Ticket>({} as Ticket);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, callback?: () => void) => {
    try {
      e.preventDefault();
      const departure = formatISO(parseISO(departureDate), { representation: "complete" });
      const arrival = formatISO(parseISO(arrivalDate), { representation: "complete" });
      const payload = { ...formValues, flightTime: departure, arrivedTime: arrival };
      const response = await handleTicket(payload);
      console.log(departure);
      console.log(arrival);
      console.log("response >", response);
      callback && callback();
    } catch (error) {
      console.log("error >", error);
    }
  };

  console.log(formValues);
  return {
    formValues,
    setFormValues,
    handleSubmit,
    setDepartureDate,
    setArrivalDate,
  };
}

export default TicketHooks;
