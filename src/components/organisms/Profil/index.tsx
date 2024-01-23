import { useState } from "react";
import Avatar from "src/assets/Profile.png";
import Image from "src/components/atoms/Img";
import Popup from "src/components/organisms/PopUp/editprofileSuccess";

function Profil() {
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const [showPopup, setShowPopup] = useState(false);

  const showSuccessPopup = () => {
    setShowPopup(true);
  };

  const handleSubmit = () => {
    showSuccessPopup();
  };

  const closePopup = () => {
    setShowPopup(false);
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
    <>
      <div className="flex-1 p-10 border-2 rounded-md m-4 mb-36">
        <h1 className="text-2xl font-bold mb-4">Profil Akun</h1>

        <div className="col-span-12 mb-4 text-center">
          <label htmlFor="profileImageInput" className="relative inline-block">
            <Image
              src={profileImageFile ? URL.createObjectURL(profileImageFile) : userData.profileImage}
              alt={"Profile"}
              className={"rounded-full h-32 w-32"}
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

        <div className="grid grid-cols-12 gap-4">
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
          <div className="col-span-12">
            <button className="bg-blue-500 text-white py-4 px-4 rounded w-full" onClick={handleSubmit}>
              Simpan
            </button>
          </div>
        </div>
      </div>

      {showPopup && <Popup onClose={closePopup} />}
    </>
  );
}

export default Profil;
