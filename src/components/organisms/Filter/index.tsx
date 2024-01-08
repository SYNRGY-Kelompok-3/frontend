import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button";

function Filter() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="search flex flex-col justify-center items-start self-stretch p-5 rounded-xl bg-white/[.20] mx-[200px] mt-[75px]">
                    <div className="flex items-start">
                        <div className="flex items-start gap-2.5 p-4 rounded-t-xl bg-white">
                            <div className="text-[#3e7bfa] text-center font-['Poppins'] font-semibold leading-6">Sekali Jalan/Pulang Pergi</div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2.5 self-stretch">
                        <div className="w-full gap-3 self-stretch p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white">
                            <div className="flex items-center gap-2.5 self-stretch">
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Dari</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Masukkan kota atau bandara
                                    </div>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Ke</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Masukkan kota atau bandara
                                    </div>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Jumlah Penumpang</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Masukkan Jumlah Penumpang
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 self-stretch">
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Tanggal Pergi</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Pilih Tanggal Keberangkatan
                                    </div>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Tanggal Pulang</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Pilih Tanggal Kepulangan
                                    </div>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <div className="dari text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Kelas Penerbangan</div>
                                    <div className="flex gap-5 self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5">
                                        Pilih Kelas Penerbangan
                                    </div>
                                </div>
                            </div>
                            <Button onSubmit={() => navigate("/tiket")} type={"submit"} content={"Cari Tiket"} className={"w-full button_large flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded bg-[#3e7bfa]"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter;