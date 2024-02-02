// ChartHooks.tsx
import { useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartHooksProps {
  selectedYear: string;
  selectedMonth: string;
  chartId: string; // Tambahkan props untuk ID chart
}

const ChartHooks: React.FC<ChartHooksProps> = ({ selectedYear, selectedMonth, chartId }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data
        const data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          revenue: [100, 150, 200, 180, 220, 300, 250],
          numberOfBookings: [20, 25, 30, 18, 35, 40, 30],
        };

        const ctx = document.getElementById(chartId) as HTMLCanvasElement | null;

        if (ctx) {
          new Chart(ctx, {
            type: "bar",
            data: {
              labels: data.labels,
              datasets: [
                {
                  label: "Revenue",
                  data: data.revenue,
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Number of Bookings",
                  data: data.numberOfBookings,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            },
          });
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [selectedYear, selectedMonth, chartId]);

  return <canvas id={chartId} />;
};

export default ChartHooks;
