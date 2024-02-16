import Lottie from "lottie-react";
import animation from "src/assets/animation.json";

function Loading() {
  return (
    <div className="fixed z-[98] inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col gap-5 bg-white border-slate-300 border-solid rounded-lg p-8">
        <Lottie animationData={animation} />
        <div className="max-w-[444px] flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold">Mohon Tunggu Sebentar</p>
          <p className="text-xs">
            Sedang memproses informasi penerbangan kamu untuk memberikan pengalaman pemesanan yang lebih cepat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
