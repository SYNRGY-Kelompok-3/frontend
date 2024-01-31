import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import Api from "src/services/api";

function AdminProvider({ children }: PropsWithChildren) {
  const { fetchProfile } = Api();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const [role, setRole] = useState<string>("");

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      const userRole = response["data 1"]["roles"][0].type;

      setRole((prevRole) => {
        if (userRole === "user_role") {
          window.location.href = "/";
          return prevRole; // No change if user_role
        } else {
          setShow(false);
          return userRole; // Update role if not user_role
        }
      });
    } catch (error) {
      console.log("error > ", error);
      setShow(true);
    }
  }, [fetchProfile]);

  useEffect(() => {
    fetchUser();
    if (!role) {
      setShow(false);
    }
  }, [token, role, fetchUser]);

  if (show) {
    return children;
  } else {
    return <></>;
  }
}

export default AdminProvider;
