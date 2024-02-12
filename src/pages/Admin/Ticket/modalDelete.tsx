import Button from "src/components/atoms/Button";
import useAction from "./ticket.hooks";
import IconCO from "src/assets/PopUp/ConfirmOrder.svg";
import Image from "src/components/atoms/Img";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, id }) => {
  const { handleDelete } = useAction();

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] m-5 bg-white shadow-xl flex flex-col p-8 rounded-lg gap-3">
        <i className="fa fa-times self-end hover:cursor-pointer" onClick={onClose}></i>
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={IconCO} alt={"Confirm Order"} className="w-[190px] h-[180px] mb-5"></Image>
          <p className="text-black text-lg font-bold mb-2">Apakah Data Penumpang Sudah Benar?</p>
          <p className="text-black text-sm">
            Setelah menekan tombol
            <span className="text-[#3E7BFA] font-semibold text-center text-sm"> “Ya, Benar”</span> maka data
            pemesanan akan dimasukan kedalam sistem dan tidak bisa diubah.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button
            id="kembali"
            content={"Kembali"}
            type={"submit"}
            className={
              "inline-block mt-3 p-3 font-bold leading-normal text-lg text-center text-black align-middle transition-all bg-white border-2 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
          <Button
            id="delete-tiket"
            content={"Hapus Ticket"}
            type={"submit"}
            onClick={() => handleDelete(id, onClose)}
            className={
              "inline-block mt-3 p-3 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
