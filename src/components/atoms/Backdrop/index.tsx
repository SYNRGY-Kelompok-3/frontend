import React, { ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
  return (
    <div className="fixed top-0 w-screen h-screen overflow-y-scroll bg-black/50">
      <div className="flex items-center justify-center w-full h-full my-[100px]">{children}</div>
    </div>
  );
};

export default Backdrop;
