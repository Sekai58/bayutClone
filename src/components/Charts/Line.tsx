import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  const data = {
    labels: ["Mar", "May", "July", "Sept", "Nov", "2024"],
    datasets: [
      {
        label: "Trends in Business Bay",
        data: [65000, 69000, 71000, 75000, 79000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return (
    <div>
      <h3 className="font-semibold text-lg">Price Trends</h3>
      <p>
        View the listing price and transaction price trends of similar
        properties
      </p>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
