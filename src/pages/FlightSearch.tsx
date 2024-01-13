import React from "react";
import { useGetTickets } from "src/usecases/modules/tickets";

const FlightSearch: React.FC = () => {
  const { ticketState } = useGetTickets();
  console.log(ticketState, "nah");
  return <div>FlightSearch</div>;
};

export default FlightSearch;
