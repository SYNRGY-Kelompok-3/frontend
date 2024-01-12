function StepsOrder() {
  return (
    <section>
      <div className="grid justify-items-center">
        <div className="w-1/2 py-5">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-300">
            <ol className="relative z-10 flex justify-between text-base font-semibold text-gray-500">
              <li className="bg-white pr-2">
                <li className="flex items-center gap-2 rounded-full bg-blue-500 p-2">
                  <span className="h-6 w-6 rounded-full bg-white text-center text-[10px]/6 font-bold text-blue-500">
                    1
                  </span>
                  <span className="hidden sm:block text-white mr-4">Pemesanan Tiket</span>
                </li>
              </li>
              <li className="bg-white px-2">
                <li className="flex items-center gap-2 rounded-full bg-gray-50 p-2">
                  <span className="h-6 w-6 rounded-full bg-white border border-gray-200 text-center text-[10px]/6 font-bold">
                    2
                  </span>
                  <span className="hidden sm:block mr-4">Pembayaran</span>
                </li>
              </li>
              <li className="bg-white pl-2">
                <li className="flex items-center gap-2 rounded-full bg-gray-50 p-2">
                  <span className="h-6 w-6 rounded-full bg-white border border-gray-200 text-center text-[10px]/6 font-bold">
                    3
                  </span>
                  <span className="hidden sm:block mr-4">Selesai</span>
                </li>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsOrder;
