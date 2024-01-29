import { PropsWithChildren, useEffect, useState } from "react";
import { axiosAuth } from "src/services/axios";
import axios from "axios";

function AdminProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const [role, setRole] = useState<string>("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${axiosAuth.defaults.baseURL}user/detail-profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRole(response.data["data 1"]["roles"][0].type);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchUser();
    if (role) {
      if (role !== "user_role") {
        window.location.href = "/";
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  }, [token, role]);

  if (show) {
    return children;
  }

  return <></>;
}

export default AdminProvider;
