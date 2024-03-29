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
      setRole(response["data 1"]["roles"][0].type);

      if (response["data 1"]["roles"][0].name === "ROLE_USER") {
        setShow(false);
        window.location.href = "/";
      } else {
        setShow(true);
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, role]);

  if (show) {
    return children;
  } else {
    return <></>;
  }
}

export default AdminProvider;
