import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

interface ChartHooksProps {
  selectedYear: string;
  chartId: string;
}

interface ChartData {
  airlines: string[];
  revenue: {
    economy: (number | null)[];
    business: (number | null)[];
  };
}

const ChartHooks: React.FC<ChartHooksProps> = ({ selectedYear, chartId }) => {
  const [chartData, setChartData] = useState<ChartData>({
    airlines: [],
    revenue: {
      economy: [],
      business: [],
    },
  });

  useEffect(() => {
    const fetchChartData = async (airline: string, passengerClass: string) => {
      try {
        const apiUrl = `https://travelid-backend-java-dev.up.railway.app/revenueReport/annual?year=${selectedYear}&airline=${airline}&passengerClass=${passengerClass}`;

        const token = localStorage.getItem("token");

        // Menambahkan header Authorization dengan token
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Menggunakan Axios untuk melakukan request API dengan header Authorization
        const response = await axios.get(apiUrl, { headers });
        const apiData = response.data;
        console.log(apiData);

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

    const fetchData = async () => {
      try {
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
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [selectedYear]);

  useEffect(() => {
    if (
      chartData.airlines.length > 0 &&
      chartData.revenue.economy.length > 0 &&
      chartData.revenue.business.length > 0
    ) {
      const ctx = document.getElementById(chartId) as HTMLCanvasElement | null;

      if (ctx) {
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
  }, [chartData, chartId]);

  return <canvas id={chartId} />;
};

export default ChartHooks;
