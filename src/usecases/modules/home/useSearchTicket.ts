import { useNavigate } from "react-router-dom";
import { ITicketListParams, PAGE_SIZE, TCity, TPassengerClass } from "src/constants";
import {
  setOriginCity,
  setDestinationCity,
  setStartDate,
  setEndDate,
  setPassengerClass,
} from "src/state/ticketSlice/ticketList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { useCallback } from "react";

export const useSearchTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { startDateStr, endDateStr, originCity, destinationCity, transit } = useSelector(
    (state: RootState) => state.ticket
  );

  const handleSelectStartDate = useCallback(
    async (date: Date) => {
      console.log(new Date());
      const dateISO = date.toISOString();
      console.log(dateISO);
      await dispatch(setStartDate(dateISO));
    },
    [dispatch]
  );
  const handleSelectEndDate = useCallback(
    async (date: Date) => {
      const dateISO = date.toISOString();
      await dispatch(setEndDate(dateISO));
    },
    [dispatch]
  );

  const handleSelectOriginCity = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const cityValue = event.target.value as TCity;
      await dispatch(setOriginCity(cityValue));
    },
    [dispatch]
  );

  const handleSelectDestinationCity = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const cityValue = event.target.value as TCity;
      await dispatch(setDestinationCity(cityValue));
    },
    [dispatch]
  );

  const handleSelectClass = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const classValue = event.target.value;
      dispatch(setPassengerClass(classValue as TPassengerClass));
    },
    [dispatch]
  );

  const params: ITicketListParams = {
    page: 0,
    size: PAGE_SIZE,
    airlines: ``,
    isDiscount: false,
    freeMeal: false,
    startDateStr,
    endDateStr,
    transit,
    originCity,
    destinationCity,
  };

  const onSearchTicket = async (): Promise<void> => {
    const { page, size, startDateStr, originCity, destinationCity } = params;
    await navigate(
      `/flight/full-search?page=${page}&size=${size}&startDateStr=${startDateStr}&endDateStr=&originCity=${originCity}&destinationCity=${destinationCity}`
    );
  };
  return {
    onSearchTicket,
    handleSelectClass,
    handleSelectOriginCity,
    handleSelectStartDate,
    handleSelectEndDate,
    handleSelectDestinationCity,
    startDateStr,
    endDateStr,
    originCity,
    destinationCity,
    transit,
  };
};
