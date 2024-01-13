import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";

import Globe from "src/assets/FilterHome/globe-africa.png";
import Departure from "src/assets/FilterHome/plane-departure.png";
import Arrival from "src/assets/FilterHome/plane-arrival.png";
import Passanger from "src/assets/FilterHome/user-friends.png";
import Callendar from "src/assets/FilterHome/calendar-alt.png";
import Class from "src/assets/FilterHome/chair-office.png";
import { useSearchTicket } from "src/usecases/modules/home";

function Filter() {
  const { onSearchTicket } = useSearchTicket();
  return (
    <>
      <section>
        <div className="search flex flex-col justify-center items-start self-stretch p-5 rounded-xl bg-white/[.20] mx-[200px] my-[75px]">
          <div className="flex items-start">
            <div className="flex gap-2.5 p-4 rounded-t-xl bg-white items-center">
              <Image src={Globe} alt={"Globe"} className="h-[15px]" />
              <div className="text-[#3e7bfa] text-center font-semibold leading-6">
                Sekali Jalan/Pulang Pergi
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2.5 self-stretch">
            <div className="w-full gap-3 self-stretch p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white">
              <div className="flex items-center gap-2.5 self-stretch">
                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                  <div className="flex items-center">
                    <Image src={Departure} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Dari</div>
                  </div>
                  <select
                    id="kotaasal"
                    className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full"
                  >
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
                  <div className="flex items-center">
                    <Image src={Arrival} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Ke</div>
                  </div>
                  <select
                    id="kotatujuan"
                    className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full"
                  >
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
                  <div className="flex items-center">
                    <Image src={Passanger} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Ke</div>
                  </div>
                  <select
                    id="jumlah"
                    className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full"
                  >
                    <option selected>Masukkan Jumlah Penumpang</option>
                    <option>1</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-stretch">
                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                  <div className="flex items-center">
                    <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Tanggal Pergi</div>
                  </div>
                  <input
                    type="date"
                    className="w-full bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2"
                  />
                </div>
                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                </svg>
                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                  <div className="flex items-center">
                    <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Tanggal Pulang</div>
                  </div>
                  <input
                    type="date"
                    className="w-full bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2"
                  />
                </div>
                <svg width={2} height={51} viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1" d="M0.666504 0.5V50.5" stroke="#333333" strokeLinecap="round" />
                </svg>
                <div className="w-[33%] justify-start p-4 rounded-bl-xl bg-white">
                  <div className="flex items-center">
                    <Image src={Class} alt={"Departure"} className="h-[15px] mr-2" />
                    <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                      Kelas Penerbangan
                    </div>
                  </div>
                  <select
                    id="jumlah"
                    className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full"
                  >
                    <option selected>Pilih Kelas Penerbangan</option>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First</option>
                  </select>
                </div>
              </div>
              <Button
                onClick={onSearchTicket}
                type={"button"}
                content={"Cari Tiket"}
                className={
                  "w-full flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
