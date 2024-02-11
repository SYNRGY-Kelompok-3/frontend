import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import Globe from "src/assets/FilterHome/globe-africa.png";
import Departure from "src/assets/FilterHome/plane-departure.png";
import Arrival from "src/assets/FilterHome/plane-arrival.png";
import Passanger from "src/assets/FilterHome/user-friends.png";
import Callendar from "src/assets/FilterHome/calendar-alt.png";
import Class from "src/assets/FilterHome/chair-office.png";
import Loading from "src/components/organisms/Loading";
import { useSearchTicket } from "src/usecases/modules/home";
import { useState } from "react";
import { Datepicker } from "flowbite-react";
import { useDateFormatter } from "src/usecases/common/useDateFormat";

interface IFilterHome {
  isFilterMore?: boolean;
}

function Filter({ isFilterMore }: IFilterHome) {
  const {
    onSearchTicket,
    handleSelectClass,
    handleSelectOriginCity,
    handleSelectDestinationCity,
    originCity,
    destinationCity,
    startDateStr,
    endDateStr,
    handleSelectStartDate,
    handleSelectEndDate,
  } = useSearchTicket();
  const { formatDateMonthYear, formatUTC } = useDateFormatter();
  const [isOneWay, setOneWayValue] = useState<boolean>(false);
  const setOneWay = () => {
    setOneWayValue(!isOneWay);
  };

  // Loader
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchTicket = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visibility (1s)
      await onSearchTicket();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          {!isFilterMore && (
            <div
              className={`search flex flex-col justify-center items-start self-stretch p-5 rounded-xl bg-white/[.20] m-[20px] sm:m-[40px] xl:mx-[200px]`}
            >
              <div className="flex">
                <div className="flex gap-2.5 p-4 rounded-t-xl bg-white items-center">
                  <Image src={Globe} alt={"Globe"} className="h-[15px]" />
                  <div className="text-[#3e7bfa] text-center font-semibold leading-6">
                    Sekali Jalan/Pulang Pergi
                  </div>
                  <label
                    htmlFor="check"
                    className="flex bg-gray-100 relative cursor-pointer w-[40px] h-[20px] rounded-full items-center"
                  >
                    <input type="checkbox" id="check" className="sr-only peer" onClick={setOneWay} />
                    <span className="w-[35%] h-[70%] bg-blue-300 absolute rounded-full left-[3px] peer-checked:bg-blue-600 peer-checked:left-[23px] transition-all duration-500" />
                  </label>
                </div>
              </div>
              <div className="flex justify-center gap-2.5 self-stretch">
                <div className="w-full gap-3 self-stretch p-4 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-1 sm:gap-2 self-stretch">
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Departure} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Dari</div>
                      </div>
                      <select
                        id="kotaasal"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                        onChange={(e) => handleSelectOriginCity(e)}
                        value={originCity}
                      >
                        <option value="">Masukkan Kota Asal</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bali">Bali</option>
                      </select>
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Arrival} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Ke</div>
                      </div>
                      <select
                        id="kotatujuan"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                        onChange={(e) => handleSelectDestinationCity(e)}
                        value={destinationCity}
                      >
                        <option value="">Masukkan Kota Tujuan</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bali">Bali</option>
                      </select>
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Passanger} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Jumlah Penumpang
                        </div>
                      </div>
                      <select
                        id="jumlah"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                      >
                        <option value="">Masukkan Jumlah Penumpang</option>
                        <option value="1">1</option>
                        <option value="3">2</option>
                      </select>
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Tanggal Pergi
                        </div>
                      </div>
                      <Datepicker
                        showClearButton={false}
                        onSelectedDateChanged={(date: Date) => handleSelectStartDate(date)}
                        minDate={new Date()}
                        language="id-ID"
                        value={formatDateMonthYear(startDateStr)}
                      />
                    </div>
                    <div
                      className={`flex-col justify-start py-1 lg:py-2 rounded-bl-xl bg-white ${
                        !isOneWay ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Tanggal Pulang
                        </div>
                      </div>
                      <Datepicker
                        showClearButton={false}
                        onSelectedDateChanged={(date: Date) => handleSelectEndDate(date)}
                        minDate={formatUTC(startDateStr)}
                        language="id-ID"
                        disabled={!isOneWay}
                        value={formatDateMonthYear(endDateStr)}
                      />
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Class} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Kelas Penerbangan
                        </div>
                      </div>
                      <select
                        id="jumlah"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                        onChange={handleSelectClass}
                      >
                        <option value="ekonomi">Economy</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>
                  <Button
                    id={"search"}
                    onClick={handleSearchTicket}
                    type={"button"}
                    content={"Cari Tiket"}
                    className={
                      "w-full flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] mt-2 sm:mt-3 py-2 sm:py-5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg"
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {isFilterMore && (
            <div
              className={`search flex flex-col justify-center items-start self-stretch p-5 rounded-xl bg-white/[.20]  `}
            >
              <div className="flex justify-center gap-2.5 self-stretch">
                <div className="w-full gap-3 self-stretch p-4 rounded-lg bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-1 sm:gap-2 self-stretch">
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Departure} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Dari</div>
                      </div>
                      <select
                        id="kotaasal"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                        onChange={(e) => handleSelectOriginCity(e)}
                        value={originCity}
                      >
                        <option value="">Masukkan Kota Asal</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bali">Bali</option>
                      </select>
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Departure} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Ke</div>
                      </div>
                      <select
                        id="kotatujuan"
                        className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                        onChange={(e) => handleSelectDestinationCity(e)}
                        value={destinationCity}
                      >
                        <option value="">Masukkan Kota Tujuan</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bali">Bali</option>
                      </select>
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Tanggal Pergi
                        </div>
                      </div>
                      <Datepicker
                        showClearButton={false}
                        onSelectedDateChanged={(date: Date) => handleSelectStartDate(date)}
                        minDate={new Date()}
                        language="id-ID"
                        value={formatDateMonthYear(startDateStr)}
                      />
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <div className="flex items-center">
                        <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                        <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">
                          Tanggal Pulang
                        </div>
                      </div>
                      <Datepicker
                        showClearButton={false}
                        onSelectedDateChanged={(date: Date) => handleSelectEndDate(date)}
                        minDate={formatUTC(startDateStr)}
                        language="id-ID"
                        value={formatDateMonthYear(endDateStr)}
                      />
                    </div>
                    <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                      <Button
                        id={"search"}
                        onClick={handleSearchTicket}
                        type={"button"}
                        content={"Cari Tiket"}
                        className={
                          "w-full flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] py-2 sm:py-5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default Filter;
