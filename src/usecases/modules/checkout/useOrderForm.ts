import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";

import {
  handleCheckout as fetchHandleCheckout,
  setFirstName,
  setLastName,
  setTitle,
  setPhoneNumber,
  setEmail,
  setOrderAsSamePassenger,
  setFirstNamePassenger,
  setLastNamePassenger,
  setTitlePassenger,
  IBooking,
} from "src/state/checkoutSlice/checkout";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const useOrderForm = () => {
  const checkoutState = useSelector((state: RootState) => state.checkout);
  const ticketState = useSelector((state: RootState) => state.ticket);
  const seatState = useSelector((state: RootState) => state.seat);
  const userData: string = localStorage.getItem("userData") || ``;
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: checkoutState,
  });

  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchTitle = watch("title");
  const watchPhoneNumber = watch("phoneNumber");
  const watchEmail = watch("email");
  const watchIsOrderSameAsPassenger = watch("isOrderSameAsPassenger");
  const watchFirstNamePassenger = watch("firstNamePassenger");
  const watchLastNamePassenger = watch("lastNamePassenger");
  const watchTitlePassenger = watch("titlePassenger");

  const handleCheckoutPayment = handleSubmit(async () => {
    setShowPopup(true);
    if (showPopup) {
      const payload: IBooking = {
        customer: {
          id: JSON.parse(userData).id,
        },
        flight: {
          id: ticketState.detailTicket.id,
        },
        email: watchEmail,
        phoneNumber: watchPhoneNumber.toString(),
        listBookingDetail: seatState.seatNumbers.map((seatNumber) => {
          return {
            customerName: watchFirstNamePassenger + " " + watchLastNamePassenger,
            seatNumber: seatNumber,
            totalSeatPrice: seatState.totalPrice + ticketState.detailTicket.price,
            category: "adult",
          };
        }),
      };
      await dispatch(fetchHandleCheckout(payload));
    }
  });

  const reCheckData = () => {
    setShowPopup(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setValue("firstName", watchFirstName);
      setValue("lastName", watchLastName);
      setValue("title", watchTitle);
      setValue("phoneNumber", watchPhoneNumber);
      setValue("email", watchEmail);
      setValue("isOrderSameAsPassenger", true);
      setValue("firstNamePassenger", watchFirstName);
      setValue("lastNamePassenger", watchLastName);
      setValue("titlePassenger", watchTitle);
    } else {
      setValue("isOrderSameAsPassenger", false);
      setValue("firstNamePassenger", "");
      setValue("lastNamePassenger", "");
      setValue("titlePassenger", "");
    }
  };

  useEffect(() => {
    if (watchIsOrderSameAsPassenger) {
      setValue("isOrderSameAsPassenger", true);
      setValue("firstNamePassenger", watchFirstNamePassenger);
      setValue("lastNamePassenger", watchLastNamePassenger);
      setValue("titlePassenger", watchTitlePassenger);
    }
    dispatch(setFirstName(watchFirstName));
    dispatch(setLastName(watchLastName));
    dispatch(setTitle(watchTitle));
    dispatch(setPhoneNumber(watchPhoneNumber));
    dispatch(setEmail(watchEmail));
    dispatch(setOrderAsSamePassenger(watchIsOrderSameAsPassenger));
    dispatch(setFirstNamePassenger(watchFirstNamePassenger));
    dispatch(setLastNamePassenger(watchLastNamePassenger));
    dispatch(setTitlePassenger(watchTitlePassenger));
  }, [
    dispatch,
    checkoutState,
    setValue,
    watchEmail,
    watchFirstName,
    watchFirstNamePassenger,
    watchLastName,
    watchLastNamePassenger,
    watchPhoneNumber,
    watchTitle,
    watchTitlePassenger,
    watchIsOrderSameAsPassenger,
  ]);

  return {
    handleCheckoutPayment,
    checkoutState,
    register,
    showPopup,
    errors,
    reCheckData,
    setShowPopup,
    onChange,
  };
};
