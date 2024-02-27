import { Buttons, Svg } from "@/components";
import { Card } from "@/components/Card";
import { ChartCard } from "@/components/ChartCard";
import { ExpenseCard } from "@/components/ExpenseCard";
import { Records } from "@/components/Records";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-between mx-auto max-w-screen-xl bg-gray-200 h-screen gap-4 p-4">
      <div className="w-full flex justify-between gap-4">
        <Card />
        <ExpenseCard
          title="Your Income"
          totalamount="1,200,000$"
          percentage="35%"
        />
        <ExpenseCard
          title="Total Expenses"
          totalamount="-1,200,000$"
          percentage="32%"
        />
      </div>
      <div className="h-fit w-full">
        <ChartCard />
      </div>
      <div className="w-full flex flex-col h-fit rounded-xl object-cover bg-white">
        <div className=" w-full h-16 flex items-center p-4">
          <p className="text-xl">Last Records</p>
        </div>
        <div className="divider my-0"></div>
        <Records />
        <Records />
        <Records />
        <Records />
      </div>
    </div>
  );
};
export default Dashboard;
