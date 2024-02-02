import React, { useState } from "react";
import ChartHooks from "./analitik.hooks";

const Analitik: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
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
                  <h4 className="ml-4">A. Laporan Pemasukan Tahunan</h4>{" "}
                  <div className="m-3 flex items-center justify-end space-x-2">
                    <label htmlFor="year1" className="text-sm">
                      Select Year:
                    </label>
                    <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                  <div className="p-5">
                    <ChartHooks selectedYear={selectedYear} chartId="revenueChart" />
                  </div>
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
