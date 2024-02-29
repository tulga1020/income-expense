import { BarCard } from "./BarCard";
import { PieCard } from "./PieCard";

export const ChartCard = () => {
  return (
    <div className="flex gap-4 ">
      <div className="chartCard ">
        <div className="flex flex-col gap-2 items-center p-2 w-full h-fit ">
          <BarCard title="Income Expense" />
        </div>
      </div>
      <div className="chartCard">
        <div className="flex flex-col gap-2 items-center p-2 w-full ">
          <PieCard pieTitle="Income Expense" date="Feb 1 - Feb 28" />
        </div>
      </div>
    </div>
  );
};
