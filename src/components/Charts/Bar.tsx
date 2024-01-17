// BarChart.js
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Avg. annual rent/sqft", "Asking price"],
    datasets: [
      {
        // label: "Monthly Sales",
        data: [160, 220],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <p>
        <h2 className="text-lg font-medium">Average annual rent*</h2>
        <span>for other Studio apartments in Business Bay</span>
      </p>

      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
