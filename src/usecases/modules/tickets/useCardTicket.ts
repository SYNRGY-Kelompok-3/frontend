import { useState } from "react";
import { fetchTicketDetail } from "src/state/ticketSlice/ticketList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";

export const useCardTicket = () => {
  const [ticketData] = useState<object>({});
  const [showModalDetailTicket, setShowModalDetailTicket] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { detailTicket } = useSelector((state: RootState) => state.ticket);

  const onShowTicketDetail = async (ticketId: number) => {
    await dispatch(fetchTicketDetail(ticketId));
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
    detailTicket,
  };
};
