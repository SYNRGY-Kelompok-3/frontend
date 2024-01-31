import { create } from "zustand";

type StoreUser = {
  userData: {
    username: string;
    fullname: string;
    phoneNumber: string;
  };
  //  eslint-disable-next-line no-unused-vars
  setUserData: (data: { username: string; fullname: string; phoneNumber: string }) => void;
};

export const useUserData = create<StoreUser>((set) => ({
  userData: {
    username: "",
    fullname: "",
    phoneNumber: "",
  },
  setUserData: (data: { username: string; fullname: string; phoneNumber: string }) => set({ userData: data }),
}));
