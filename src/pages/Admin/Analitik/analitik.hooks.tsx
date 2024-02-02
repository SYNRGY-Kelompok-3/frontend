import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

interface ChartHooksProps {
  selectedDate: { year: string; month?: string };
  chartId: string;
}

interface ChartData {
  airlines: string[];
  revenue: {
    economy: (number | null)[];
    business: (number | null)[];
  };
  income: number[];
}

const ChartHooks: React.FC<ChartHooksProps> = ({ selectedDate, chartId }) => {
  const [chartData, setChartData] = useState<ChartData>({
    airlines: [],
    revenue: {
      economy: [],
      business: [],
    },
    income: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchChartData = async (airline: string, passengerClass: string) => {
      try {
        let apiUrl = `https://travelid-backend-java-dev.up.railway.app/revenueReport/annual?year=${selectedDate.year}&airline=${airline}&passengerClass=${passengerClass}`;

        if (selectedDate.month) {
          apiUrl = `https://travelid-backend-java-dev.up.railway.app/revenueReport/monthly?year=${selectedDate.year}&month=${selectedDate.month}&airline=${airline}&passengerClass=${passengerClass}`;
        }

        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(apiUrl, { headers });
        const apiData = response.data;

        return {
          airline: apiData.data.airline ?? "",
          passengerClass,
          totalRevenue: apiData.data.totalRevenue,
        } as const;
      } catch (error) {
        console.error(`Error fetching data for ${airline} - ${passengerClass}:`, error);
        return null;
      }
    };

    const fetchIncomeData = async () => {
      try {
        const apiUrl = `https://travelid-backend-java-dev.up.railway.app/booking/incomeByMonthAndYear/${selectedDate.year}`;

        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(apiUrl, { headers });
        const apiData = response.data;

        return apiData.data.incomeByMonth;
      } catch (error) {
        console.error(`Error fetching income data:`, error);
        return [];
      }
    };

    const fetchData = async () => {
      try {
        setLoading(true);

        const airlines = [
          "Garuda Indonesia",
          "Citilink",
          "Batik Air Indonesia",
          "Lion Airlines",
          "Sriwijaya Air",
        ];
        const passengerClasses = ["economy", "business"];

        const dataPromises = airlines.flatMap((airline) =>
          passengerClasses.map((passengerClass) => fetchChartData(airline, passengerClass))
        );

        const incomeData = await fetchIncomeData();

        const fetchedData = await Promise.all(dataPromises);

        setChartData({
          airlines: fetchedData
            .filter((data) => data !== null && data.airline !== null)
            .map((data) => data?.airline ?? ""),
          revenue: {
            economy: fetchedData
              .filter((data) => data?.passengerClass === "economy")
              .map((data) => data?.totalRevenue ?? null),
            business: fetchedData
              .filter((data) => data?.passengerClass === "business")
              .map((data) => data?.totalRevenue ?? null),
          },
          income: incomeData,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setError(error instanceof Error ? error : new Error("An error occurred"));
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  useEffect(() => {
    if (
      chartData.airlines.length > 0 &&
      chartData.revenue.economy.length > 0 &&
      chartData.revenue.business.length > 0
    ) {
      const ctx = document.getElementById(chartId) as HTMLCanvasElement | null;

      if (ctx) {
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
          existingChart.destroy(); // Destroy the existing chart to prevent flickering
        }

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: chartData.airlines,
            datasets: [
              {
                label: "Economy Class Revenue",
                data: chartData.revenue.economy,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
              {
                label: "Business Class Revenue",
                data: chartData.revenue.business,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }

    if (chartData.income.length > 0) {
      const incomeCtx = document.getElementById(`${chartId}-income`) as HTMLCanvasElement | null;

      if (incomeCtx) {
        const existingIncomeChart = Chart.getChart(incomeCtx);
        if (existingIncomeChart) {
          existingIncomeChart.destroy(); // Destroy the existing income chart to prevent flickering
        }

        new Chart(incomeCtx, {
          type: "bar",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            datasets: [
              {
                label: "Income",
                data: chartData.income,
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [chartData, chartId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <>
      <canvas id={chartId} />
      <canvas id={`${chartId}-income`} />
    </>
  );
};

export default ChartHooks;