import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button";

function Filter() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="search flex flex-col justify-center items-start self-stretch p-5 rounded-xl bg-white/[.20] mx-[200px] my-[75px]">
                    <div className="flex items-start">
                        <div className="flex items-start gap-2.5 p-4 rounded-t-xl bg-white">
                            <div className="text-[#3e7bfa] text-center font-['Poppins'] font-semibold leading-6">Sekali Jalan/Pulang Pergi</div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2.5 self-stretch">
                        <div className="w-full gap-3 self-stretch p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white">
                            <div className="flex items-center gap-2.5 self-stretch">
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label htmlFor="kotaasal" className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Dari</label>
                                    <select id="kotaasal" className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2 w-full">
                                        <option selected>Masukkan kota atau bandara</option>
                                        <option>Jakarta</option>
                                        <option>Bandung</option>
                                        <option>Surabaya</option>
                                        <option>Yogyakarta</option>
                                        <option>Bali</option>
                                    </select>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label htmlFor="kotatujuan" className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Ke</label>
                                    <select id="kotatujuan" className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2 w-full">
                                        <option selected>Masukkan kota atau bandara</option>
                                        <option>Jakarta</option>
                                        <option>Bandung</option>
                                        <option>Surabaya</option>
                                        <option>Yogyakarta</option>
                                        <option>Bali</option>
                                    </select>
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label htmlFor="jumlah" className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Jumlah Penumpang</label>
                                    <select id="jumlah" className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2 w-full">
                                        <option selected>Masukkan Jumlah Penumpang</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 self-stretch">
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Tanggal Pergi</label>
                                    <input type="date" className="w-full bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2" />
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Tanggal Pulang</label>
                                    <input type="date" className="w-full bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2" />
                                </div>
                                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                                </svg>
                                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                                    <label className=" text-[#333] font-['Poppins'] text-lg font-medium leading-[1.625rem]">Kelas Penerbangan</label>
                                    <select id="jumlah" className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] font-['Poppins'] text-sm leading-5 mt-2 w-full">
                                        <option selected>Pilih Kelas Penerbangan</option>
                                        <option>Economy</option>
                                        <option>Business</option>
                                        <option>First</option>
                                    </select>
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