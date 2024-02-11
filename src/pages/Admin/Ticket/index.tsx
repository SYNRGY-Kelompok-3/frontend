import { useNavigate } from "react-router-dom";
import Button from "src/components/atoms/Button";
import Modal from "../Ticket/modal";
import useAction from "./ticket.hooks";
import { parseISO, format } from "date-fns";
function Tiket() {
  const navigate = useNavigate();
  const {
    showModal,
    setShowModal,
    handleCloseModal,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPages,
    tickets,
  } = useAction();

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
              <h6 className="dark:text-white font-semibold">Tickets</h6>
              <Button
                id="add-ticket"
                onClick={() => setShowModal(true)}
                type={"button"}
                className={
                  "bg-lime-500 px-2.5 text-md rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                }
                content={"Add Ticket"}
              />
            </div>
            <div className="flex-auto px-6">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Passanger Class
                      </th>
                      <th className="px-6 py-3 font-bold center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Origin Airport
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Destination Airport
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Airlines
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Flight Number
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Origin City
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Destination City
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Gate
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Flight Time
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Arrival Time
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Duration
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Transit
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Free Meal
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Price
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Discount Price
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Discount
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((data, index) => (
                      <tr key={index}>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.passengerClass}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.originAirport}
                          </span>
                        </td>
                        <td className="p-2 text-center leading-normal align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.destinationAirport}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.airlines.airline}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.flightNumber}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.originCity}
                          </span>
                        </td>
                        <td className="p-2 text-center leading-normal align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.destinationCity}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.gate}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {format(parseISO(data.flightTime as string), "yyyy-MM-dd HH:mm:ss")}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {format(parseISO(data.arrivedTime as string), "yyyy-MM-dd HH:mm:ss")}
                          </span>
                        </td>
                        <td className="p-2 text-center leading-normal align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.duration}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.transit}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.freeMeal}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.price}
                          </span>
                        </td>
                        <td className="p-2 text-center leading-normal align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.discountPrice}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            {data.isDiscount}
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex items-center justify-center gap-3">
                            <Button
                              id="edit"
                              onClick={() => navigate(`/edit-ticket/${1}`)}
                              type={"button"}
                              className={
                                "bg-lime-500 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                              }
                              content={"Edit"}
                            />
                            <Button
                              id="delete"
                              onClick={() => navigate(`/detail-ticket/${1}`)}
                              type={"button"}
                              className={
                                "bg-red-500 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                              }
                              content={"Delete"}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end items-center p-6 gap-3">
              <div className={`${currentPage === 0 ? "hidden" : ""}`}>
                <Button
                  id="prev-ticket"
                  onClick={() => handlePreviousPage()}
                  type={"button"}
                  className={`bg-lime-500 px-2.5 text-md rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                  content={<i className="fa-solid fa-arrow-left"></i>}
                />
              </div>
              <div>{currentPage + 1}</div>
              <div className={`${totalPages === currentPage + 1 ? "hidden" : ""}`}>
                <Button
                  id="next-page"
                  onClick={() => handleNextPage()}
                  type={"button"}
                  className={
                    "bg-lime-500 px-2.5 text-md rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                  }
                  content={<i className="fa-solid fa-arrow-right"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default Tiket;
