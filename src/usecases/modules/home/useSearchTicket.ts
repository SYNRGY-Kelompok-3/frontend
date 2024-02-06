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

  const handleSelectDate = useCallback(
    (isDateStart: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
      const date: Date = new Date(event.target.value);
      const dateISO = date.toISOString();
      isDateStart ? dispatch(setStartDate(dateISO)) : dispatch(setEndDate(dateISO));
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
    isDiscount: false,
    freeMeal: false,
    startDateStr,
    endDateStr,
    transit,
    originCity,
    destinationCity,
  };

  const onSearchTicket = async (): Promise<void> => {
    const { page, size, startDateStr, endDateStr, originCity, destinationCity } = params;
    await navigate(
      `/flight/full-search?page=${page}&size=${size}&startDateStr=${startDateStr}&endDateStr=${endDateStr}&originCity=${originCity}&destinationCity=${destinationCity}`
    );
  };
  return {
    onSearchTicket,
    handleSelectClass,
    handleSelectOriginCity,
    handleSelectDate,
    handleSelectDestinationCity,
    startDateStr,
    endDateStr,
    originCity,
    destinationCity,
    transit,
  };
};
