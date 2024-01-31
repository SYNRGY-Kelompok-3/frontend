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

function NavbarHooks() {
  const { fetchProfile } = Api();
  const token = localStorage.getItem("token");

  const NavMenu: Menu[] = [
    { text: "Beranda", link: "/" },
    { text: "Tentang Kami", link: "/tentang-kami" },
    { text: "Artikel", link: "/artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan" },
  ];

  const Menu: Menu[] = [
    { text: "Profile", link: "/profile" },
    { text: "Notifikasi", link: "/notifikasi" },
    { text: "Beranda", link: "/" },
    { text: "Tentang Kami", link: "/tentang-kami" },
    { text: "Artikel", link: "/artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan" },
    { text: "Dashboard", link: "/dashboard" },
  ];

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [user, setUser] = useState<User>({});
  const [role, setRole] = useState<string>();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as Node;
    if (checkboxRef.current && !checkboxRef.current?.contains(target)) {
      setIsChecked(false);
    }
  };

  const handleLogout = () => {
    const c = confirm("are you sure want to logout?");
    if (c) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      setUser(response["data 2"]);
      setRole(response["data 1"]["roles"][0].type);
    } catch (error) {
      console.log("error > ", error);
    }
  }, [fetchProfile]);

  const sidemenuResult = token
    ? role === "user_role"
      ? Menu.filter((item) => item.text !== "Dashboard")
      : Menu
    : Menu.filter(
        (item) => item.text !== "Dashboard" && item.text !== "Profile" && item.text !== "Notifikasi"
      );

  useEffect(() => {
    fetchUser();
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [fetchUser]);

  return {
    NavMenu,
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

export default NavbarHooks;
