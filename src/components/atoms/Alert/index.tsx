function Alert() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <svg className="w-4 h-4 mr-2 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span className="sm:inline text-xs flex">Selesaikan Pembayaran Sebelum 01 Jan 2024, Pukul 19:00</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-4 w-4 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>
  )
}

export default Alert