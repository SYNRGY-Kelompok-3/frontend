import { axiosAuth, axiosApi, axiosUpload } from "src/services/axios";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

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

  const fetchProfile = async () => {
    try {
      const response: AxiosResponse = await axios.get(`${axiosApi.defaults.baseURL}user/detail-profile/`, {
        headers: { Authorization: `Bearer ${token}` },
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

  return {
    fetchLogin,
    fetchProfile,
    fetchNotif,
    handleUploadAndUpdate,
    handleUpdate,
  };
}

export default Api;
