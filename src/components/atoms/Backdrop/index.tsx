import { ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
  return (
    <div className="fixed top-0 z-[999] w-screen h-screen overflow-y-auto bg-black/50">
      <div className="flex items-center justify-center w-full my-[20px] overflow-y-auto">{children}</div>
    </div>
  );
};

export default Backdrop;
