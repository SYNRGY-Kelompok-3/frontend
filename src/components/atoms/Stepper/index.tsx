function Steper() {
  return (
    <div>
      <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-white-500 rounded-lg shadow-sm text-white sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center">
          <div className="p-1 md:pr-3 pr-0  pl-1.5 bg-green-500 rounded-full flex items-center">

            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border bg-white text-green-500 border-white-500 rounded-full shrink-0 border-white-500">
                ✔ 
            </span>
            <span className="hidden md:block">
              Pemesanan Tiket
            </span>
          </div>
            <span className="text-blue-600 text-xs ml-4">----</span>
        </li>
        <li className="flex items-center">
          <div className="p-1 md:pr-3 pr-0 pl-1.5 bg-blue-600 rounded-full flex items-center">

            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border text-blue-600 bg-white border-blue-600 rounded-full shrink-0 border-white-500">
                2 
            </span>
            <span className="hidden md:block">
              Pembayaran
            </span>
          </div>
            <span className="text-gray-500 text-xs ml-4">----</span>
        </li>
        <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border text-gray-500 border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
            </span>
            <p className="text-gray-500 hidden md:block">Selesai</p>
        </li>
      </ol>
    </div>
  )
}

export default Steper