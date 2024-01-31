import { useState, useRef, useEffect, useCallback } from "react";
import Api from "src/services/api";

interface Menu {
  text: string;
  link?: string;
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
    { text: "Beranda", link: "/" },
    { text: "Tentang Kami", link: "/tentang-kami" },
    { text: "Artikel", link: "/artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan" },
  ];

  const menu: Menu[] = [
    { text: "Profile", link: "/profile" },
    { text: "Notifikasi", link: "/notifikasi" },
    ...navMenu,
    { text: "Dashboard", link: "/dashboard" },
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

  const handleLogout = useCallback(() => {
    const c = window.confirm("are you sure want to logout?");
    if (c) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      setUser(response["data 2"]);
      setRole(response["data 1"]["roles"][0].type);
    } catch (error) {
      console.error(error);
    }
  }, [fetchProfile]);

  const sidemenuResult = token
    ? role === "user_role"
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
  }, [fetchUser, handleDocumentClick]);

  return {
    navMenu,
    sidemenuResult,
    user,
    role,
    handleLogout,
    handleCheckboxChange,
    token,
    isChecked,
    checkboxRef,
  };
}

export default useNavbarHooks;
