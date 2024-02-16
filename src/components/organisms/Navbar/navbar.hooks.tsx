import { useState, useRef, useEffect, useCallback } from "react";
import Api from "src/services/api";

interface Menu {
  text: string;
  link?: string;
  id: string;
}

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

function useNavbarHooks() {
  const { fetchProfile } = Api();
  const token = localStorage.getItem("token");

  const navMenu: Menu[] = [
    { text: "Beranda", link: "/", id: "beranda" },
    { text: "Tentang Kami", link: "/tentang-kami", id: "tentang-kami" },
    { text: "Artikel", link: "/artikel", id: "artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan", id: "pusat-bantuan" },
  ];

  const menu: Menu[] = [
    { text: "Profile", link: "/profile", id: "profile" },
    { text: "Notifikasi", link: "/notifikasi", id: "notifikasi" },
    ...navMenu,
    { text: "Dashboard", link: "/dashboard", id: "dashboard" },
  ];

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [user, setUser] = useState<User>({});
  const [role, setRole] = useState<string>();

  const handleCheckboxChange = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);

  const handleDocumentClick = useCallback((event: MouseEvent) => {
    const target = event.target as Node;
    if (checkboxRef.current && !checkboxRef.current?.contains(target)) {
      setIsChecked(false);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      if (!response) {
        return;
      }
      setUser(response["data 2"]);
      setRole(response["data 1"]["roles"][0].name);
    } catch (error) {
      console.error(error);
    }
  }, [fetchProfile]);

  const sidemenuResult = token
    ? role === "USER_ROLE"
      ? menu.filter((item) => item.text !== "Dashboard")
      : menu
    : menu.filter(
        (item) => item.text !== "Dashboard" && item.text !== "Profile" && item.text !== "Notifikasi"
      );

  useEffect(() => {
    fetchUser();
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleDocumentClick]);

  const [logoutModal, setLogoutModal] = useState(false);

  const handleCloseModal = () => {
    setLogoutModal(false);
  };

  return {
    navMenu,
    sidemenuResult,
    user,
    role,
    handleCheckboxChange,
    token,
    isChecked,
    checkboxRef,
    logoutModal,
    setLogoutModal,
    handleCloseModal,
  };
}

export default useNavbarHooks;
