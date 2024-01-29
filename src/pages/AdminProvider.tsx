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

      // Move the redirection logic here
      if (response.data["data 1"]["roles"][0].type === "user_role") {
        window.location.href = "/";
      } else {
        setShow(false);
      }
    } catch (error) {
      console.log("error > ", error);
      setShow(true);
    }
  };

  useEffect(() => {
    fetchUser();
    if (!role) {
      setShow(false);
    }
  }, [token, role]);

  if (show) {
    return children;
  } else {
    return <></>;
  }
}

export default AdminProvider;
