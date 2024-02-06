import axios, { Axios } from "axios";

const jwt = localStorage.getItem("token");
const { VITE_APP_API_URL, VITE_APP_API_IMAGE } = import.meta.env;

export const axiosAuth: Axios = axios.create({
  baseURL: VITE_APP_API_URL,
  timeout: 10000,
});

export const axiosApi: Axios = axios.create({
  baseURL: VITE_APP_API_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

export const axiosUpload: Axios = axios.create({
  baseURL: VITE_APP_API_IMAGE,
  timeout: 10000,
});
