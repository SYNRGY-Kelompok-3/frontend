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
import { useEffect } from "react";

export const useOrderForm = () => {
  const checkoutState = useSelector((state: RootState) => state.checkout);
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
    const payload: IBooking = {
      customer: {
        id: 8,
      },
      listBookingDetail: [
        {
          flight: {
            id: 5,
          },
          customerName: checkoutState.firstName,
          identityNumber: "tes",
          seatNumber: "tes",
          totalSeatPrice: 2000,
          category: "adult",
        },
      ],
    };
    await dispatch(fetchHandleCheckout(payload));
  });

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
    errors,
    onChange,
  };
};
