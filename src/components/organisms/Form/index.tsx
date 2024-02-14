import { useOrderForm } from "src/usecases/modules/checkout/useOrderForm";
import Button from "../../atoms/Button";
import { memo, FC } from "react";
import PopUpCheckout from "../PopUpCheckout";
import Image from "src/assets/pana.svg";

const FormCheckout: FC = memo(() => {
  const { handleCheckoutPayment, checkoutState, register, errors, onChange, showPopup, reCheckData } =
    useOrderForm();
  return (
    <div className=" w-full rounded-lg border border-[#EDEDED] p-5 mx-2.5">
      <form onSubmit={handleCheckoutPayment}>
        <h2 className="mb-5 text-base font-semibold">Detail Pemesanan</h2>
        <div className="border-b border/10 pb-2.5 mb-5">
          <div className="mb-5 flex gap-2.5">
            <div className="flex flex-col flex-1">
              <label htmlFor="firstName" className="mb-2 text-xs font-medium">
                Nama Depan<span className="text-xs text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575] ${
                  errors.firstName && "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="Masukkan Nama Depan"
              />
              {errors.firstName && <span className="text-[10px] text-red-500">This is required</span>}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="mb-2 text-xs font-medium">
                Nama Belakang
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575]"
                placeholder="Masukkan Nama Belakang"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="title" className="mb-2 text-xs font-medium">
              Titel<span className="text-xs text-red-500">*</span>
            </label>
            <select
              id="title"
              {...register("title", { required: true })}
              className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-1 focus:ring-blue-700 focus:border-blue-700 placeholder:text-[#757575] ${
                errors.title && "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
            >
              <option value="">Pilih Titel</option>
              <option value="tuan">Tuan</option>
              <option value="nyonya">Nyonya</option>
              <option value="nona">Nona</option>
            </select>
            {errors.title && <span className="text-[10px] text-red-500">This is required</span>}
          </div>
          <div className="mb-5 flex gap-2.5">
            <div className="flex flex-col flex-1">
              <label htmlFor="phoneNumber" className="mb-2 text-xs font-medium">
                Nomor Handphone<span className="text-xs text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
                className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575] ${
                  errors.phoneNumber && "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="Masukkan Nomor Handphone"
              />
              {errors.phoneNumber && <span className="text-[10px] text-red-500">This is required</span>}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="email" className="mb-2 text-xs font-medium">
                Email<span className="text-xs text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                {...register("email", { required: true })}
                className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575] ${
                  errors.email && "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="Masukkan Email"
              />
              {errors.email && <span className="text-[10px] text-red-500">This is required</span>}
            </div>
          </div>
        </div>
        <div className="mb-5 flex justify-between">
          <h2 className="text-base font-semibold">Detail Penumpang</h2>
          <div className="flex items-center">
            <label htmlFor={"toggle"} className={"text-xs font-normal mr-1"}>
              penumpang sama dengan pemesan
            </label>
            <input
              type="checkbox"
              id="toggle"
              {...register("isOrderSameAsPassenger")}
              onChange={onChange}
              className="peer sr-only opacity-0"
            />
            <label
              htmlFor="toggle"
              className="relative flex h-[15px] w-[29px] cursor-pointer items-center rounded-full bg-gray-300 px-0.5 outline-gray-400 transition-colors before:h-[11px] before:w-[11px] before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-blue-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-blue-500"
            >
              <span className="sr-only">Enable</span>
            </label>
          </div>
        </div>
        <div className="border-b border/10 pb-2.5 mb-5">
          <div className="mb-5 flex gap-2.5">
            <div className="flex flex-col flex-1">
              <label htmlFor="firstNamePassenger" className="mb-2 text-xs font-medium">
                Nama Depan<span className="text-xs text-red-500">*</span>
              </label>
              {checkoutState.isOrderSameAsPassenger ? (
                <input
                  type="text"
                  id="firstNamePassenger"
                  {...register("firstNamePassenger")}
                  disabled={true}
                  className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575] ${
                    errors.firstNamePassenger && "focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  placeholder="Masukkan Nama Depan"
                />
              ) : (
                <input
                  type="text"
                  id="firstNamePassenger"
                  {...register("firstNamePassenger", { required: true })}
                  className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575] ${
                    errors.firstNamePassenger && "focus:border-red-500 focus:ring-red-500 border-red-500"
                  }`}
                  placeholder="Masukkan Nama Depan"
                />
              )}
              {errors.firstNamePassenger && (
                <span className="text-[10px] text-red-500">This is required</span>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastNamePassenger" className="mb-2 text-xs font-medium">
                Nama Belakang
              </label>
              {checkoutState.isOrderSameAsPassenger ? (
                <input
                  type="text"
                  id="lastNamePassenger"
                  {...register("lastNamePassenger")}
                  disabled={true}
                  className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575]"
                  placeholder="Masukkan Nama Belakang"
                />
              ) : (
                <input
                  type="text"
                  id="lastNamePassenger"
                  {...register("lastNamePassenger")}
                  className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold placeholder:text-[#757575]"
                  placeholder="Masukkan Nama Belakang"
                />
              )}
            </div>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="titlePassenger" className="mb-2 text-xs font-medium">
              Titel<span className="text-xs text-red-500">*</span>
            </label>
            {checkoutState.isOrderSameAsPassenger ? (
              <select
                id="titlePassenger"
                {...register("titlePassenger")}
                disabled={true}
                className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-1 focus:ring-blue-700 focus:border-blue-700 placeholder:text-[#757575] ${
                  errors.titlePassenger && "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
              >
                <option value="">Pilih Titel</option>
                <option value="tuan">Tuan</option>
                <option value="nyonya">Nyonya</option>
                <option value="nona">Nona</option>
              </select>
            ) : (
              <select
                id="titlePassenger"
                {...register("titlePassenger", { required: true })}
                className={`px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-1 focus:ring-blue-700 focus:border-blue-700 placeholder:text-[#757575] ${
                  errors.titlePassenger && "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
              >
                <option value="">Pilih Titel</option>
                <option value="tuan">Tuan</option>
                <option value="nyonya">Nyonya</option>
                <option value="nona">Nona</option>
              </select>
            )}
            {errors.titlePassenger && <span className="text-[10px] text-red-500">This is required</span>}
          </div>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-xs font-semibold">Total</p>
          <p className="text-base font-semibold">
            <span className="text-blue-500">Rp.1.500.000</span>/pax
          </p>
        </div>
        <Button
          className={"bg-blue-500 px-12 py-5 rounded w-full text-white text-base"}
          content={"Lanjut Pembayaran"}
        />
      </form>
      {showPopup && (
        <PopUpCheckout
          btnlabel="Ya, Benar"
          btnLabelCancel="Periksa Kembali"
          okAction={() => handleCheckoutPayment()}
          cancelAction={() => reCheckData()}
          image={Image}
          isWithAction={true}
          label="Apakah Data Penumpang Sudah Benar?"
          desc="Setelah menekan tombol “Ya, Benar”  maka data pemesanan akan dimasukan kedalam sistem dan tidak bisa diubah."
        />
      )}
    </div>
  );
});

export default FormCheckout;
