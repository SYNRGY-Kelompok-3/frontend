import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "src/state/store";
import { fetchTicketList } from "src/state/ticketSlice/ticketList";
import { ITicketListParams, TCity, TTransit, PAGE_SIZE } from "src/constants";

export const useGetTicketList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useSelector((state: RootState) => state.ticket);
  const [searchParams] = useSearchParams();

  const params = useMemo<ITicketListParams>(() => {
    const page = searchParams.get("page") || 0;
    const size = searchParams.get("size") || PAGE_SIZE;
    const isDiscount = searchParams.get("isDiscount");
    const freeMeal = searchParams.get("freeMeal");
    const startDateStr = searchParams.get("startDateStr");
    const endDateStr = searchParams.get("endDateStr");
    const transit = searchParams.get("transit");
    const originCity = searchParams.get("originCity");
    const destinationCity = searchParams.get("destinationCity");

    return {
      page: Number(page),
      size: Number(size),
      isDiscount,
      freeMeal,
      startDateStr,
      endDateStr,
      transit: transit as TTransit,
      originCity: originCity as TCity,
      destinationCity: destinationCity as TCity,
    };
  }, [searchParams]);

  useEffect(() => {
    dispatch(fetchTicketList(params));
  }, [dispatch, params]);

  return {
    ticketList: data,
    isLoading,
  };
};
