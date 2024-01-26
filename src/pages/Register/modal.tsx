import RegisSuccess from "src/assets/registration-success.svg";
import { Link } from "react-router-dom";

import Button from "src/components/atoms/Button";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white flex flex-col items-center p-8 rounded-lg gap-3">
        <i className="fa fa-times self-end hover:cursor-pointer" onClick={onClose}></i>
        <img className="w-56 h-44" src={RegisSuccess} alt="success" />
        <h3 className="text-center font-semibold mt-2">Pendaftaranmu Berhasil</h3>
        <p className="text-center w-[404px]">
          Cek kode verifikasi pada email <span className="text-[#3E7BFA]">travel@gmail.com.</span> Mulai
          petualanganmu bersama kami dan nikmati fitur seru yang kami tawarkan
        </p>
        <Link className="w-full" target="_blank" to="https://www.gmail.com">
          <Button
            content={"Cek Email"}
            type={"button"}
            className={
              "inline-block w-full my-6 px-16 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Modal;
