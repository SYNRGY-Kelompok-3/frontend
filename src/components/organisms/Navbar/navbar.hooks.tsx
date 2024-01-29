import { useState, useRef, useEffect } from "react";
import { axiosAuth } from "src/services/axios";
import axios from "axios";

interface Menu {
  text: string;
  link?: string;
}

function NavbarHooks() {
  const token = localStorage.getItem("token");

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

    // Check if the click is outside the card
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

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${axiosAuth.defaults.baseURL}user/detail-profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data["data 2"]);
      setRole(response.data["data 1"]["roles"][0].type);
    } catch (error) {
      console.log("error > ", error);
    }
  };

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
  }, []);

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
