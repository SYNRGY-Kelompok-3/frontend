import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";

interface Payload {
    firstName: string;
    lastName: string;
    titel:string;
    firstName2: string;
    lastName2: string;
    titel2: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

function FormCheckout({firstName, lastName, titel, checked, setChecked}: Payload)  {
    const { handleSubmit, register, setValue, watch } = useForm();

    const watchfirstName = watch("firstName", firstName);
    const watchlastName = watch("lastName", lastName);
    const watchtitel = watch("titel", titel);
    const checkbox = watch("checkbox", {firstName, lastName, titel});

    const onSubmit = (data: unknown) => {
        alert(JSON.stringify(data));
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setValue("firstName2", watchfirstName);
            setValue("lastName2", watchlastName);
            setValue("titel2", watchtitel);
            setChecked(true);
        } else {
            setValue("firstName2", "");
            setValue("lastName2", "");
            setValue("titel2", "Pilih Titel");
            setChecked(false);
        }
    };

    React.useEffect(() => {
        if (checkbox) {
            setValue("firstName2", watchfirstName);
            setValue("lastName2", watchlastName);
            setValue("titel2", watchtitel);
        }
    }, []);

    return (
        <>
            <div className=" w-full rounded-lg border border-[#EDEDED] p-5 mx-2.5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-5 text-base font-semibold">Detail Pemesanan</h2>
                    <div className="border-b border/10 pb-2.5 mb-5">
                        <div className="mb-5 flex">
                            <div className="grid flex-1 mr-2.5">
                                <label htmlFor="firstName" className="mb-2 text-xs font-medium">Nama Depan</label>
                                <input type="text" id="firstName" {...register("firstName")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Depan"  />
                            </div>
                            <div className="grid flex-1">
                                <label htmlFor="lastName" className="mb-2 text-xs font-medium">Nama Belakang</label>
                                <input type="text" id="lastName" {...register("lastName")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Belakang"  />
                            </div>
                        </div>
                        <div className="mb-5 grid">
                            <label htmlFor="titel" className="mb-2 text-xs font-medium">Titel</label>
                            <select id="titel" {...register("titel")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]">
                                <option selected>Pilih Titel</option>
                                <option value="tuan">Tuan</option>
                                <option value="nyonya">Nyonya</option>
                            </select>
                        </div>
                        <div className="mb-5 flex">
                            <div className="grid flex-1 mr-2.5">
                                <label htmlFor="phone" className="mb-2 text-xs font-medium">Nomor Handphone</label>
                                <input type="text" id="phone" {...register("phone")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nomor Handphone"  />
                            </div>
                            <div className="grid flex-1">
                                <label htmlFor="email" className="mb-2 text-xs font-medium">Email</label>
                                <input type="text" id="email" {...register("email")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Email"  />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 flex justify-between">
                        <h2 className="text-base font-semibold">Detail Penumpang</h2>
                        <div className="flex items-center">
                            <label htmlFor={"toggle"} className={"text-xs font-normal mr-1"}>penumpang sama dengan pemesan</label>
                            <input type="checkbox" name="toggle" id="toggle" onChange={onChange} className="peer sr-only opacity-0" />
                            <label htmlFor="toggle" className="relative flex h-[15px] w-[29px] cursor-pointer items-center rounded-full bg-gray-300 px-0.5 outline-gray-400 transition-colors before:h-[11px] before:w-[11px] before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-blue-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-blue-500">
                                <span className="sr-only">Enable</span>
                            </label>
                        </div>
                    </div>
                    <div className="border-b border/10 pb-2.5 mb-5">
                        <div className="mb-5 flex">
                            <div className="grid flex-1 mr-2.5">
                                <label htmlFor="firstName2" className="mb-2 text-xs font-medium">Nama Depan</label>
                                {checked ? (
                                    <input type="text" id="firstName2" {...register("firstName2")} disabled={true} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Depan"  />
                                ) : (
                                    <input type="text" id="firstName2" {...register("firstName2")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Depan"  />
                                )}
                            </div>
                            <div className="grid flex-1">
                                <label htmlFor="lastName2" className="mb-2 text-xs font-medium">Nama Belakang</label>
                                {checked ? (
                                    <input type="text" id="lastName2" {...register("lastName2")} disabled={true} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Belakang"  />
                                ) : (
                                    <input type="text" id="lastName2" {...register("lastName2")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]" placeholder="Masukkan Nama Belakang"  />
                                )}
                            </div>
                        </div>
                        <div className="mb-5 grid">
                            <label htmlFor="titel2" className="mb-2 text-xs font-medium">Titel</label>
                            {checked ? (
                                <select id="titel2" {...register("titel2")} disabled={true} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]">
                                    <option selected>Pilih Titel</option>
                                    <option value="tuan">Tuan</option>
                                    <option value="nyonya">Nyonya</option>
                                </select>
                            ) : (
                                <select id="titel2" {...register("titel2")} className="px-4 py-2 rounded border bg-transparent text-[10px] font-semibold focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#757575]">
                                    <option selected>Pilih Titel</option>
                                    <option value="tuan">Tuan</option>
                                    <option value="nyonya">Nyonya</option>
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-xs font-semibold">Total</p>
                        <p className="text-base font-semibold"><span className="text-blue-500">Rp.1.500.000</span>/pax</p>
                    </div>
                    <Button className={"bg-blue-500 px-12 py-5 rounded w-full text-white text-base"} content={"Lanjut Pembayaran"} />
                </form>
            </div>
        </>
    );
}

export default FormCheckout;