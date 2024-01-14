import { useState } from "react";

export const useCardTicket = () => {
  const [ticketData] = useState<object>({});
  const [showModalDetailTicket, setShowModalDetailTicket] = useState<boolean>(false);

  const onShowTicketDetail = async () => {
    await setShowModalDetailTicket(true);
  };
  const onCloseTicketDetail = async () => {
    await setShowModalDetailTicket(false);
  };
  return {
    showModalDetailTicket,
    onCloseTicketDetail,
    onShowTicketDetail,
    ticketData,
  };
};
