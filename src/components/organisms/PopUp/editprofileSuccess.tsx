import Image from "../../atoms/Img";
import PopUp from "../../../assets/PopupProfil.png";

interface EditProfileProps {
  onClose: () => void;
}

function EditprofileSuccess({ onClose }: EditProfileProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        className="bg-white p-8 rounded-lg flex flex-col justify-end"
        style={{ maxWidth: "27.75rem", maxHeight: "22.4rem" }}
      >
        <button className="text-gray-600 ml-auto mt-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
            strokeWidth="3"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex items-center justify-between mt-2 mx-auto">
          <Image src={PopUp} alt={"popup"} />
        </div>
        <p className="font-bold text-center text-lg mt-4">Yeay, Profil Anda Berhasil Diperbarui</p>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Data profil Anda telah diperbarui. Cek kembali dan pastikan data Anda sudah benar, ya!
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full" onClick={onClose}>
          Selesai
        </button>
      </div>
    </div>
  );
}

export default EditprofileSuccess;
