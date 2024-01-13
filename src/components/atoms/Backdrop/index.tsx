import { ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
  return (
    <div className="fixed top-0 z-50 w-screen h-screen overflow-y-scroll bg-black/50">
      <div className="flex items-center justify-center w-full h-full pt-[450px]">{children}</div>
    </div>
  );
};

export default Backdrop;
