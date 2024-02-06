import { Link } from "react-router-dom";
import VerificationSuccess from "src/assets/verif-success.svg";

import Button from "src/components/atoms/Button";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] sm:w-[500px] m-5 bg-white flex flex-col items-center p-8 rounded-lg gap-3">
        <i className="fa fa-times self-end hover:cursor-pointer" onClick={onClose}></i>
        <img className="w-56 h-44" src={VerificationSuccess} alt="success" />
        <h3 className="text-center font-semibold mt-2">Yeay, Verifikasi Email Berhasil</h3>
        <p className="text-[15px] sm:text-lg text-center w-[336px] sm:w-[404px]">
          Kamu sudah bisa memulai perjalananmu bersama kami. Nikmati fitur menarik dan seru lainnya
        </p>
        <Link className="w-full" to="/login">
          <Button
            content={"Selesai"}
            type={"button"}
            className={
              "inline-block w-full mt-3 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Modal;
