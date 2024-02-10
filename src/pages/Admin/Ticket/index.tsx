import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Image from "src/components/atoms/Img";
import Button from "src/components/atoms/Button";
import Modal from "../Ticket/modal";
function Tiket() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
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
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Author
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Function
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Status
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Employed
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <Image
                              src={"../assets/img/team-2.jpg"}
                              className={
                                "inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              }
                              alt={"user1"}
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white font-semibold">
                              John Michael
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-sm font-semibold leading-tight dark:text-white dark:opacity-80">
                          Manager
                        </p>
                        <p className="mb-0 text-sm leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          Organization
                        </p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Online
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          23/04/18
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
                  </tbody>
                </table>
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
