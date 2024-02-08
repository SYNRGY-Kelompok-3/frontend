import React, { useState } from "react";
import ChartHooks from "./analitik.hooks";

const Analitik: React.FC = () => {
  const [selectedDate1, setSelectedDate1] = useState({ year: "2024" });
  const [selectedDate2, setSelectedDate2] = useState({ year: "2024", month: "1" });
  const [selectedDate3, setSelectedDate3] = useState({ year: "2024" });

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
                  <h4 className="ml-4">A. Laporan Pemasukan Tahunan</h4>{" "}
                  <div className="m-3 flex items-center justify-end space-x-2">
                    <label htmlFor="year1" className="text-sm">
                      Select Year:
                    </label>
                    <select
                      id="yearSelect1"
                      value={selectedDate1.year}
                      onChange={(e) => setSelectedDate1({ year: e.target.value })}
                      className="rounded-lg"
                    >
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                  <div className="p-5">
                    <ChartHooks selectedDate={selectedDate1} chartId="chart1" />
                  </div>
                </div>
                <div className="flex-none w-1/2 pr-5 pt-2">
                  <h4 className="ml-4">B. Laporan Pemasukan Bulanan</h4>{" "}
                  <div className="m-3 flex items-center justify-end space-x-2">
                    <label htmlFor="year2" className="text-sm">
                      Select Year:
                    </label>
                    <select
                      id="year2"
                      value={selectedDate2.year}
                      onChange={(e) => setSelectedDate2({ ...selectedDate2, year: e.target.value })}
                      className="rounded-lg"
                    >
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>

                    <label htmlFor="month2" className="text-sm">
                      Select Month:
                    </label>
                    <select
                      id="month2"
                      value={selectedDate2.month}
                      onChange={(e) => setSelectedDate2({ ...selectedDate2, month: e.target.value })}
                      className="rounded-lg"
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
                  </div>
                  <div className="p-5">
                    <ChartHooks selectedDate={selectedDate2} chartId="chart2" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 pl-3 pt-2">
                <h4 className="ml-4">C. Laporan Per Bulan dalam Tahun</h4>{" "}
                <div className="m-3 flex items-center justify-end space-x-2">
                  <label htmlFor="year3" className="text-sm">
                    Select Year:
                  </label>
                  <select
                    id="year3"
                    value={selectedDate3.year}
                    onChange={(e) => setSelectedDate3({ year: e.target.value })}
                    className="rounded-lg"
                  >
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div className="p-5">
                  <ChartHooks selectedDate={selectedDate3} chartIncomeId="chart3-income" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analitik;
