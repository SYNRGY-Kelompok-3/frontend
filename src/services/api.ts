import { axiosAuth, axiosApi, axiosUpload } from "src/services/axios";
import axios from "axios";
import { useEffect, useState } from "react";

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

function Api() {
  const [user, setUser] = useState<User>({});
  const fetchLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${axiosAuth.defaults.baseURL}v1/user-login/login/`, {
        username: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${axiosApi.defaults.baseURL}user/detail-profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.error === "invalid_token") {
        localStorage.removeItem("token");
        window.location.reload();
      } else {
        setUser(response.data["data 2"]);
        return response.data;
      }
    } catch (error) {
      return error;
    }
  };

  const fetchNotif = async () => {
    try {
      const response = await axios.get(
        `${axiosAuth.defaults.baseURL}notification/getByCustomerId/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const handleUpload = async (formData: FormData) => {
    try {
      const response = await axios.post(`${axiosUpload.defaults.baseURL}api/profil/upload`, formData);
      return response.data.data.secure_url;
    } catch (error) {
      return error;
    }
  };

  const handleUpdate = async (payload: User) => {
    try {
      const response = await axios.put(`${axiosApi.defaults.baseURL}customers/update`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    fetchLogin,
    fetchProfile,
    fetchNotif,
    handleUpload,
    handleUpdate,
  };
}

export default Api;
