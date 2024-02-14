import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import {
  handleProcessPayment as fetchHandleProcessPayment,
  setBankPembayaran,
  setNamaRekening,
  setNomorRekening,
  setMasaBerlaku,
  setCvv,
} from "src/state/checkoutSlice/payment";
import { setFlow } from "src/state/checkoutSlice/checkout";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const usePayment = () => {
  const paymentState = useSelector((state: RootState) => state.payment);
  const dispatch = useDispatch<AppDispatch>();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: paymentState,
  });

  const watchBankPembayaran = watch("bankPembayaran");
  const watchNamaRekening = watch("namaRekening");
  const watchNomorRekening = watch("nomorRekening");
  const watchMasaBerlaku = watch("masaBerlaku");
  const watchCvv = watch("cvvCvn");

  const handleProcessPayment = handleSubmit(async () => {
    setShowPopup(true);
    if (showPopup) {
      const payload = {
        booking: {
          id: 1,
        },
        bankPembayaran: paymentState.bankPembayaran,
        namaRekening: paymentState?.namaRekening ?? "John Doe",
        nomorRekening: paymentState.nomorRekening,
        masaBerlaku: paymentState.masaBerlaku,
        cvvCvn: paymentState.cvvCvn,
      };
      await dispatch(fetchHandleProcessPayment(payload));
      await dispatch(setFlow(3));
    }
  });

  const reCheckData = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    setValue("bankPembayaran", watchBankPembayaran);
    setValue("namaRekening", watchNamaRekening);
    setValue("nomorRekening", watchNomorRekening);
    setValue("masaBerlaku", watchMasaBerlaku);
    setValue("cvvCvn", watchCvv);
    dispatch(setBankPembayaran(watchBankPembayaran));
    dispatch(setNamaRekening(watchNamaRekening));
    dispatch(setNomorRekening(watchNomorRekening));
    dispatch(setMasaBerlaku(watchMasaBerlaku));
    dispatch(setCvv(watchCvv));
  }, [
    dispatch,
    setValue,
    watchBankPembayaran,
    watchCvv,
    watchMasaBerlaku,
    watchNamaRekening,
    watchNomorRekening,
  ]);

  return {
    handleProcessPayment,
    paymentState,
    register,
    showPopup,
    reCheckData,
    errors,
  };
};
