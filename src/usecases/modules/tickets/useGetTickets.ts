import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { fetchTicketList } from "src/state/ticketSlice/slice";

export const useGetTickets = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useSelector((state: RootState) => state.ticket);

  useEffect(() => {
    dispatch(fetchTicketList());
  }, [dispatch]);

  return {
    ticketList: data,
    isLoading,
  };
};
