import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "src/state/store";
import { fetchTicketList } from "src/state/ticketSlice/ticketList";
import { ITicketListParams, TCity, TTransit, PAGE_SIZE } from "src/constants";

export const useGetTicketList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isLoadingLoadMore } = useSelector((state: RootState) => state.ticket);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const params = useMemo<ITicketListParams>(() => {
    const page = searchParams.get("page") || 0;
    const size = searchParams.get("size") || PAGE_SIZE;
    const isDiscount = searchParams.get("isDiscount");
    const freeMeal = searchParams.get("freeMeal");
    const startDateStr = searchParams.get("startDateStr") || new Date();
    // const endDateStr = searchParams.get("endDateStr");
    const transit = searchParams.get("transit") || ``;
    const originCity = searchParams.get("originCity");
    const destinationCity = searchParams.get("destinationCity");
    const airlines = searchParams.get("airlines") || ``;
    return {
      page: Number(page),
      size: Number(size),
      isDiscount,
      freeMeal,
      startDateStr,
      // endDateStr,
      transit: transit as TTransit,
      originCity: originCity as TCity,
      destinationCity: destinationCity as TCity,
      airlines: airlines,
    };
  }, [searchParams]);

  const loadMore = () => {
    const currentPage = Number(searchParams.get("page") || "0");
    searchParams.set("page", (currentPage + 1).toString());
    setSearchParams(searchParams);
    setIsLoadMore(true);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (Number(page) <= 0) {
      dispatch(fetchTicketList({ ...params, isLoadMore: false }));
    } else {
      dispatch(fetchTicketList({ ...params, isLoadMore }));
    }
  }, [dispatch, isLoadMore, params, searchParams]);

  return {
    ticketList: data,
    isLoading,
    isLoadingLoadMore,
    params,
    loadMore,
  };
};
