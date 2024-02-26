import daisyui from "daisyui";
import { Bar } from "react-chartjs-2";

export const ChartCard = (props) => {
  const { title } = props;
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#84CC16",
        borderColor: "rgba(255,99,132,1)",
        barThickness: 15,
        borderRadius: 20,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [3000000, 2200000, 2440000, 1040000, 1500000, 1850000, 2800000],
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        borderColor: "rgba(255,99,132,1)",
        borderRadius: 20,
        barThickness: 15,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [2300000, 2100000, 2140000, 940000, 1000000, 1150000, 1800000],
      },
    ],
  };
  return (
    <div className="chartCard">
      <div className="flex gap-4 items-center p-4 mb-[-2]">
        <div className="font-semibold">{title}</div>
      </div>
      <div className="divider m-0"> </div>
      <div>
        <Bar data={chartData} width={100} height={30} />
      </div>

      <div className="w-full"></div>
    </div>
  );
};
