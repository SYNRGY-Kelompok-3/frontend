import Image from "src/components/atoms/Img";
import Popup from "src/components/organisms/PopUp/editprofileSuccess";
import useAction from "./profile.hooks";

function Profil() {
  const {
    user,
    ProfilePicture,
    handleUploadPicture,
    showPopup,
    closePopup,
    handleSubmit,
    formValues,
    setFormValues,
  } = useAction();

  return (
    <>
      <div className="flex-1 p-5 m-4 border-2 rounded-lg sm:p-8 overflow-y-auto h-fit sm:h-screen">
        <h1 className="mb-4 text-xl font-bold sm:text-2xl">Profil Akun</h1>

        <div className="col-span-12 mb-4 text-center">
          <label htmlFor="profileImageInput" className="relative inline-block">
            <Image
              id={"profile-image"}
              src={ProfilePicture}
              alt={"Profile"}
              className={"rounded-full h-32 w-32"}
            />
            <div className="absolute bottom-0 right-0 p-1 bg-white border-2 border-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
            onChange={handleUploadPicture}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <label>
              Nama<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder={user.name}
              value={formValues.name || ""}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg "
            />
          </div>
          <div className="space-y-2">
            <label>
              Nomor Handphone<span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="text"
              placeholder={user.phoneNumber}
              value={formValues.phoneNumber || ""}
              onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="text"
              placeholder={user.email}
              value={formValues.email || ""}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              readOnly
              className="w-full p-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>
              Tanggal Lahir<span className="text-red-500">*</span>
            </label>
            <input
              id="birthdate"
              type="date"
              value={formValues.dateOfBirth || ""}
              onChange={(e) => setFormValues({ ...formValues, dateOfBirth: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>
              Jenis Kelamin<span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {user.gender === null ? (
                <>
                  <option disabled selected>
                    -- Choose Gender --
                  </option>
                  <option value="Male">Laki-laki</option>
                  <option value="Female">Perempuan</option>
                </>
              ) : user.gender === "Male" ? (
                <>
                  <option disabled>-- Choose Gender --</option>
                  <option value="Male" selected>
                    Laki-laki
                  </option>
                  <option value="Female">Perempuan</option>
                </>
              ) : (
                <>
                  <option disabled>-- Choose Gender --</option>
                  <option value="Male">Laki-laki</option>
                  <option value="Female" selected>
                    Perempuan
                  </option>
                </>
              )}
            </select>
          </div>
        </div>
        <button
          id="simpan-profil"
          className="w-full px-4 py-4 mt-10 text-xl text-white bg-blue-500 rounded-lg"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>

      {showPopup && <Popup onClose={closePopup} />}
    </>
  );
}

export default Profil;
