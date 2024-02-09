import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Image from "src/components/atoms/Img";
import Bell from "src/assets/Bell.svg";
import Api from "src/services/api";

interface User {
  created_date?: string;
  updated_date?: string;
  id?: number;
  name?: string;
  identityNumber?: string | null;
  email?: string;
  dateOfBirth?: string;
  gender?: string | null;
  profilePicture?: string | null;
  phoneNumber?: string;
}

interface Notification {
  id?: number;
  customer?: User;
  message?: string;
  timestamp?: string;
}

function Notification() {
  const { fetchNotif, fetchProfile } = Api();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState<User>({});
  const [notification, setNotification] = useState<Notification[]>([]);

  const handleIconClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      setUser(response["data 2"]);
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

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, user.id, fetchNotification, fetchUser]);

  return (
    <>
      <div className="flex items-center mr-3">
        <div ref={iconRef} onClick={handleIconClick} className="relative cursor-pointer">
          <Image id={"notification-icon"} src={Bell} alt={"bell"} className={"h-10"} />
        </div>
        {isOpen && (
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg w-[200px] absolute top-[70px] sm:right-[130px] xl:right-[190px] z-20"
          >
            <div className="p-4">
              <ul className="space-y-3">
                {notification.length > 0 ? (
                  notification.slice(0, 3).map((item: Notification, index: number) => (
                    <li key={index} className="cursor-pointer truncate text-sm">
                      {item.message}
                    </li>
                  ))
                ) : (
                  <li className="cursor-pointer truncate">Tidak ada notifikasi</li>
                )}
              </ul>
            </div>
            <Link
              id="view-more"
              to="/notifikasi"
              className="flex justify-center bg-sky-100 py-2 rounded-b-lg hover:text-white hover:bg-sky-600"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Notification;
