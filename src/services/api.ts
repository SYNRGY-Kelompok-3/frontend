import { axiosAuth, axiosApi, axiosUpload } from "src/services/axios";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

interface Id {
  id: number;
}

interface Ticket {
  passengerClass: string;
  originAirport: string;
  destinationAirport: string;
  airlines: Id;
  flightNumber: string;
  originCity: string;
  destinationCity: string;
  gate: string;
  flightTime: string;
  arrivedTime: string;
  duration: string;
  transit: string;
  freeMeal: boolean;
  price: number;
  discountPrice: number;
  isDiscount: boolean;
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
const token = localStorage.getItem("token");

function Api() {
  const [user, setUser] = useState<User>({});

  const fetchLogin = async (email: string, password: string) => {
    try {
      const response: AxiosResponse = await axios.post(`${axiosAuth.defaults.baseURL}v1/user-login/login/`, {
        username: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const fetchProfile = async (tokenParams?: string) => {
    try {
      const response: AxiosResponse = await axios.get(`${axiosApi.defaults.baseURL}user/detail-profile/`, {
        headers: { Authorization: `Bearer ${tokenParams || token}` },
      });
      setUser(response.data["data 2"]);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const fetchNotif = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `${axiosAuth.defaults.baseURL}notification/getByCustomerId/${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const handleUploadAndUpdate = async (formData: FormData) => {
    try {
      console.log("Uploading image to Cloudinary...");
      const uploadResponse: AxiosResponse = await axios.post(
        `${axiosUpload.defaults.baseURL}api/profil/upload`,
        formData
      );

      if (uploadResponse.data && uploadResponse.data.data.secure_url) {
        const imageUrl = uploadResponse.data.data.secure_url;
        const updatedUser: User = { ...user, profilePicture: imageUrl };
        await handleUpdate(updatedUser);
        return imageUrl;
      } else {
        console.error("Invalid response from Cloudinary:", uploadResponse);
        throw new Error("Invalid response from Cloudinary");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const handleUpdate = async (payload: User) => {
    try {
      const response: AxiosResponse = await axios.put(
        `${axiosApi.defaults.baseURL}customers/update`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const handleTicket = async (payload: Ticket) => {
    try {
      const response: AxiosResponse = await axios.post(`${axiosApi.defaults.baseURL}flight/save`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
        return error;
      }
    }
  };

  const handleUpdateTicket = async (payload: Ticket, id: number) => {
    try {
      const data = { id, ...payload };
      const response: AxiosResponse = await axios.put(`${axiosApi.defaults.baseURL}flight/update`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const handleDeleteTicket = async (id: number) => {
    try {
      const payload = { id: id };
      const response: AxiosResponse = await axios.delete(`${axiosApi.defaults.baseURL}flight/delete`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: payload,
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  const showTicket = async (page: number, size: number) => {
    try {
      const response: AxiosResponse = await axios.get(
        `${axiosApi.defaults.baseURL}flight/listFlights?page=${page}&size=${size}`
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.error);
      }
    }
  };

  return {
    fetchLogin,
    fetchProfile,
    fetchNotif,
    handleUploadAndUpdate,
    handleUpdate,
    handleTicket,
    handleUpdateTicket,
    handleDeleteTicket,
    showTicket,
  };
}

export default Api;
