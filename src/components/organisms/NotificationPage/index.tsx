import Image from "src/components/atoms/Img";
import ChevronRight from "src/assets/ChevronRight.svg";

import Departure from "src/assets/FilterHome/plane-departure.png";

import { useEffect, useState, useCallback } from "react";
import { parseISO, format } from "date-fns";
import Api from "src/services/api";

interface User {
  created_date: string;
  updated_date: string;
  id: number;
  name: string;
  identityNumber: string | null;
  email: string;
  dateOfBirth: string;
  gender: string | null;
  profilePicture: string | null;
  phoneNumber: string;
}

interface Notification {
  id?: number;
  customer?: User;
  message?: string;
  timestamp?: string;
}

function Notification() {
  const { fetchProfile, fetchNotif } = Api();
  // const [user, setUser] = useState<User>({});
  const [notification, setNotification] = useState<Notification[]>([]);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      return response["data 2"];
    } catch (error) {
      console.log(error);
    }
  }, [fetchProfile]);

  const fetchNotification = useCallback(async () => {
    try {
      const response = await fetchNotif();
      setNotification(response);
    } catch (error) {
      console.log(error);
    }
  }, [fetchNotif]);

  useEffect(() => {
    fetchUser();
    fetchNotification();
  }, [fetchUser, fetchNotification]);

  return (
    <>
      <div className="flex-1 p-5 sm:p-8 border-2 rounded-lg m-4 h-[500px] overflow-y-auto sm:h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Notifikasi</h1>
          <h1 className="text-sm sm:text-md font-bold mb-4 text-sky-400">Mark All As Read</h1>
        </div>
        <div className="">
          {notification ? (
            notification.map((item: Notification, index: number) => (
              <div
                key={index}
                className="grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 items-end my-2 cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <Image src={Departure} alt={"departure"} className="h-[22px] sm:h-[25px]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm lg:text-lg">{item.message}</div>
                    <div className="grid lg:flex items-center lg:gap-2">
                      <div className="text-slate-400 flex items-center text-sm sm:text-md">
                        Selesaikan pembayaran sebelum
                        <span className="hidden lg:flex h-[6px] w-[6px] rounded-full bg-slate-400 ml-2"></span>
                      </div>
                      <div className="text-slate-400 text-sm sm:text-md">
                        {format(parseISO(item.timestamp as string), "yyyy-MM-dd HH:mm:ss")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center justify-between gap-3 mt-3 lg:mt-0 hidden lg:flex">
                  <div>
                    <Image src={ChevronRight} alt={"chevron"} className={"h-[40px]"} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Tidak Ada Notifikasi</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Notification;
