import { useState } from "react";
import Sidebar from "../../molecules/Sidebar";
import Avatar from "../../../assets/Avatar.png";

function Profil() {
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const [activeTab, setActiveTab] = useState("profil");

  const [showPopup, setShowPopup] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setProfileImageFile(null);
  };

  const showSuccessPopup = () => {
    setShowPopup(true);
  };

  const handleSubmit = () => {
    showSuccessPopup();
  };

  // Dummy user data
  const userData = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    birthDate: "1990-01-01",
    gender: "Male",
    email: "john.doe@example.com",
    profileImage: Avatar,
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />

      <div className="flex-1 py-4 px-4 border-2 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Profil Akun</h1>

        {activeTab === "profil" && (
          <div className="col-span-12 mb-4 text-center">
            <label htmlFor="profileImageInput" className="relative inline-block">
              <img
                src={profileImageFile ? URL.createObjectURL(profileImageFile) : userData.profileImage}
                alt="Profile"
                className="rounded-full h-32 w-32"
              />
              <div className="absolute bottom-0 right-0 p-1 bg-white border-2 border-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </label>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setProfileImageFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>
        )}

        <div className="grid grid-cols-12 gap-4">
          {activeTab === "profil" && (
            <>
              <div className="col-span-6 mb-4">
                <label>
                  Nama Depan<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={userData.firstName}
                  className="border rounded p-2 w-full border-gray-300"
                />
              </div>
              <div className="col-span-6 mb-4">
                <label>Nama Belakang</label>
                <input
                  type="text"
                  value={userData.lastName}
                  className="border rounded p-2 w-full border-gray-300"
                />
              </div>
              <div className="col-span-6 mb-4">
                <label>
                  Nomor Handphone<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={userData.phoneNumber}
                  className="border rounded p-2 w-full border-gray-300"
                />
              </div>
              <div className="col-span-6 mb-4">
                <label>
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={userData.email}
                  readOnly
                  className="border rounded p-2 w-full text-gray-700 bg-gray-200 border-gray-300"
                />
              </div>
              <div className="col-span-6 mb-4">
                <label>
                  Tanggal Lahir<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={userData.birthDate}
                  className="border rounded p-2 w-full border-gray-300"
                />
              </div>
              <div className="col-span-6 mb-4">
                <label>
                  Jenis Kelamin<span className="text-red-500">*</span>
                </label>
                <select value={userData.gender} className="border rounded p-2 w-full border-gray-300">
                  <option value="Male">Laki-laki</option>
                  <option value="Female">Perempuan</option>
                </select>
              </div>
            </>
          )}

          <div className="col-span-12">
            <button className="bg-blue-500 text-white py-4 px-4 rounded w-full" onClick={handleSubmit}>
              Simpan
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 w-500 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500 mr-2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="font-bold text-green-500">Yeay, Profil Anda Berhasil Diperbarui</p>
              </div>
              <button className="text-gray-600" onClick={() => setShowPopup(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="mt-2 text-gray-700">
              Data profil Anda telah diperbarui. Cek kembali dan pastikan data Anda sudah benar, ya!
            </p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
              onClick={() => setShowPopup(false)}
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;
