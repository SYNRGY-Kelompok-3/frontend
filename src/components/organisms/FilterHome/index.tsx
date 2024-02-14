import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import Globe from "src/assets/FilterHome/globe-africa.png";
import Departure from "src/assets/FilterHome/plane-departure.png";
import Arrival from "src/assets/FilterHome/plane-arrival.png";
import Passanger from "src/assets/FilterHome/user-friends.png";
import Callendar from "src/assets/FilterHome/calendar-alt.png";
import Class from "src/assets/FilterHome/chair-office.png";
import { useSearchTicket } from "src/usecases/modules/home";
import { memo, useState } from "react";
import { Datepicker } from "flowbite-react";
import { useDateFormatter } from "src/usecases/common/useDateFormat";
import Loading from "src/components/organisms/Loading";
interface IFilterHome {
  isFilterMore?: boolean;
}

const Filter = memo(({ isFilterMore }: IFilterHome) => {
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

  const [isLoading, setIsLoading] = useState(false);
  const handleSearchTicket = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await onSearchTicket();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleIncrement = (type: string) => {
    switch (type) {
      case "adult":
        setAdultCount(adultCount + 1);
        break;
      case "child":
        setChildCount(childCount + 1);
        break;
      case "infant":
        setInfantCount(infantCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type: string) => {
    switch (type) {
      case "adult":
        if (adultCount > 1) setAdultCount(adultCount - 1);
        break;
      case "child":
        if (childCount > 0) setChildCount(childCount - 1);
        break;
      case "infant":
        if (infantCount > 0) setInfantCount(infantCount - 1);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setShowModal(false);
  };

  return (
    <>
      {isLoading && <Loading />}
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
                      className="flex bg-transparent h-[42px] self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
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
                      className="flex bg-transparent h-[42px] self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
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
                      <button
                        onClick={() => setShowModal(true)}
                        className="text-[#333] text-lg font-medium leading-[1.625rem]"
                      >
                        Jumlah Penumpang
                      </button>
                    </div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-2 pl-3 flex items-center opacity-[0.7] text-[#757575] h-[42px] w-full justify-start border border-slate-200 rounded-lg"
                    >
                      <p className="text-sm">{`${adultCount} Adult, ${childCount} Child, ${infantCount} Infant`}</p>
                    </button>
                    {showModal && (
                      <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                          </div>

                          <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>

                          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                  <h3
                                    className="text-lg leading-6 font-medium text-gray-900"
                                    id="modal-title"
                                  >
                                    Jumlah Penumpang
                                  </h3>
                                  <div className="mt-4 space-y-4">
                                    <div className="flex items-center justify-between w-full">
                                      <div>Adult:</div>
                                      <div className="flex items-center">
                                        <button
                                          onClick={() => handleDecrement("adult")}
                                          className="bg-red-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-dash-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                                            />
                                          </svg>
                                        </button>
                                        <span className="mx-3 flex justify-center w-[10px]">
                                          {adultCount}
                                        </span>
                                        <button
                                          onClick={() => handleIncrement("adult")}
                                          className="bg-blue-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-plus-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                      <div>Child:</div>
                                      <div className="flex items-center">
                                        <button
                                          onClick={() => handleDecrement("child")}
                                          className="bg-red-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-dash-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                                            />
                                          </svg>
                                        </button>
                                        <span className="mx-3 flex justify-center w-[10px]">
                                          {childCount}
                                        </span>
                                        <button
                                          onClick={() => handleIncrement("child")}
                                          className="bg-blue-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-plus-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                      <div>Infant:</div>
                                      <div className="flex items-center">
                                        <button
                                          onClick={() => handleDecrement("infant")}
                                          className="bg-red-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-dash-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                                            />
                                          </svg>
                                        </button>
                                        <span className="mx-3 flex justify-center w-[10px]">
                                          {infantCount}
                                        </span>
                                        <button
                                          onClick={() => handleIncrement("infant")}
                                          className="bg-blue-500 p-1 text-white rounded-lg"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-plus-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button
                                onClick={handleSubmit}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-full sm:text-sm"
                              >
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                    <div className="flex items-center mb-2">
                      <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                      <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Tanggal Pergi</div>
                    </div>
                    <Datepicker
                      showClearButton={false}
                      onSelectedDateChanged={(date: Date) => handleSelectStartDate(date)}
                      minDate={new Date()}
                      language="id-ID"
                      value={formatDateMonthYear(startDateStr)}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "rgb(226 232 240)",
                        opacity: "0.7",
                        color: "#757575",
                      }}
                    />
                  </div>
                  <div
                    className={`flex-col justify-start py-1 lg:py-2 rounded-bl-xl bg-white ${
                      !isOneWay ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-center mb-2">
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
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "rgb(226 232 240)",
                        opacity: "0.7",
                        color: "#757575",
                      }}
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
                      className="flex bg-transparent h-[42px] self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
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
                      className="flex bg-transparent h-[42px] self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
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
                      className="flex bg-transparent h-[42px] self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-200 rounded-lg"
                      onChange={(e) => handleSelectDestinationCity(e)}
                      value={destinationCity}
                    >
                      <option value="">Masukkan Kota Tujuan</option>
                      <option value="jakarta">Jakarta</option>
                      <option value="bali">Bali</option>
                    </select>
                  </div>
                  <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                    <div className="flex items-center mb-2">
                      <Image src={Callendar} alt={"Departure"} className="h-[15px] mr-2" />
                      <div className=" text-[#333] text-lg font-medium leading-[1.625rem]">Tanggal Pergi</div>
                    </div>
                    <Datepicker
                      showClearButton={false}
                      onSelectedDateChanged={(date: Date) => handleSelectStartDate(date)}
                      minDate={new Date()}
                      language="id-ID"
                      value={formatDateMonthYear(startDateStr)}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "rgb(226 232 240)",
                        opacity: "0.7",
                        color: "#757575",
                      }}
                    />
                  </div>
                  <div className="justify-start py-1 lg:py-2 rounded-bl-xl bg-white">
                    <div className="flex items-center mb-2">
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
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "rgb(226 232 240)",
                        opacity: "0.7",
                        color: "#757575",
                      }}
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
    </>
  );
});

export default Filter;
