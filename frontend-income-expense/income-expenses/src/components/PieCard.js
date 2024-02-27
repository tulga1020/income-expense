import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "@/components/DoghnutData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieCard = (props) => {
  const { pieTitle, date } = props;
  const data = {
    datasets: [
      {
        label: [],
        data: [10, 8, 13, 13, 15],
        backgroundColor: [
          "#1C64F2",
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
          "#E74694",
        ],
        borderWidth: [0, 0, 0, 0, 0],
      },
    ],
  };
  return (
    <div className="w-full h-full bg-white p-4">
      <div className="card-title w-full items-center justify-between">
        <div className="font-semibold">{pieTitle}</div>
        <p className="text-sm text-gray-400 font-light">{date}</p>
      </div>
      <div className="divider my-0"></div>
      <div className="flex w-full gap-4">
        <div className="w-[156px] h-[156px]">
          <Doughnut data={data} />
        </div>
        <div className="w-full flex flex-col items-center justify-between">
          <DoughnutData
            color={"#F2901C"}
            desc={"Bills"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <DoughnutData
            color={"#16BDCA"}
            desc={"Food"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <DoughnutData
            color={"#FDBA8C"}
            desc={"Shopping"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <DoughnutData
            color={"#E74694"}
            desc={"Insurance"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <DoughnutData
            color={"#1C64F2"}
            desc={"Clothing"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
        </div>
      </div>
    </div>
  );
};
