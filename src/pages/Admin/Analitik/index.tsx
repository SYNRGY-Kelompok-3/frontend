// Analitik.tsx
import { useState } from "react";
import ChartHooks from "./analitik.hooks";

function Analitik() {
  const [selectedYear1, setSelectedYear1] = useState("2022");
  const [selectedMonth1, setSelectedMonth1] = useState("1");

  const [selectedYear2, setSelectedYear2] = useState("2022");
  const [selectedMonth2, setSelectedMonth2] = useState("1");

  const [selectedYear3, setSelectedYear3] = useState("2022");
  const [selectedMonth3, setSelectedMonth3] = useState("1");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedYear1(value);
    setSelectedYear2(value);
    setSelectedYear3(value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMonth1(value);
    setSelectedMonth2(value);
    setSelectedMonth3(value);
  };

  const handleUpdateChart1 = () => {
    // Implementasikan logika pembaruan chart 1 pada ChartHooks
    // Anda dapat memanggil fungsi pembaruan chart yang sesuai pada ChartHooks
  };

  const handleUpdateChart2 = () => {
    // Implementasikan logika pembaruan chart 2 pada ChartHooks
    // Anda dapat memanggil fungsi pembaruan chart yang sesuai pada ChartHooks
  };

  const handleUpdateChart3 = () => {
    // Implementasikan logika pembaruan chart 3 pada ChartHooks
    // Anda dapat memanggil fungsi pembaruan chart yang sesuai pada ChartHooks
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3 overflow-hidden">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white font-semibold">Analytics</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2 overflow-x-hidden">
              <div className="flex space-x-4">
                <div className="flex-none w-1/2 pl-3 pt-2">
                  <h4 className="ml-4">A. Laporan Pemasukan Tahunan</h4>
                  <div className="m-3 flex items-center justify-end space-x-2">
                    <label htmlFor="year1" className="text-sm">
                      Year:
                    </label>
                    <select id="year1" className="text-sm" value={selectedYear1} onChange={handleYearChange}>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>

                    <button
                      className="text-sm bg-blue-500 text-white py-2 px-2 rounded"
                      onClick={handleUpdateChart1}
                    >
                      Lihat
                    </button>
                  </div>
                  <div className="p-5">
                    <ChartHooks
                      selectedYear={selectedYear1}
                      selectedMonth={selectedMonth1}
                      chartId="chart1"
                    />
                  </div>
                </div>
                <div className="flex-none w-1/2 pr-5 pt-2">
                  <h4 className="ml-4">B. Laporan Pemasukan Bulanan</h4>
                  <div className="m-3 flex items-center justify-end space-x-2">
                    <label htmlFor="year2" className="text-sm">
                      Year:
                    </label>
                    <select id="year2" className="text-sm" value={selectedYear2} onChange={handleYearChange}>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>

                    <label htmlFor="month2" className="text-sm">
                      Month:
                    </label>
                    <select
                      id="month2"
                      className="text-sm"
                      value={selectedMonth2}
                      onChange={handleMonthChange}
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <button
                      className="text-sm bg-blue-500 text-white py-2 px-2 rounded"
                      onClick={handleUpdateChart2}
                    >
                      Lihat
                    </button>
                  </div>
                  <div className="p-5">
                    <ChartHooks
                      selectedYear={selectedYear2}
                      selectedMonth={selectedMonth2}
                      chartId="chart2"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/2 pl-3 pt-2">
                <h4 className="ml-4">C. Laporan Per Bulan dalam Tahun</h4>
                <div className="m-3 flex items-center justify-end space-x-2">
                  <label htmlFor="year3" className="text-sm">
                    Year:
                  </label>
                  <select id="year3" className="text-sm" value={selectedYear3} onChange={handleYearChange}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>

                  <label htmlFor="month3" className="text-sm">
                    Month:
                  </label>
                  <select id="month3" className="text-sm" value={selectedMonth3} onChange={handleMonthChange}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <button
                    className="text-sm bg-blue-500 text-white py-2 px-2 rounded"
                    onClick={handleUpdateChart3}
                  >
                    Lihat
                  </button>
                </div>
                <div className="p-5">
                  <ChartHooks selectedYear={selectedYear3} selectedMonth={selectedMonth3} chartId="chart3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analitik;
