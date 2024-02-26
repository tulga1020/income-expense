import { Buttons, Svg } from "@/components";
import { Card } from "@/components/Card";
import { ChartCard } from "@/components/ChartCard";
import { ExpenseCard } from "@/components/ExpenseCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-between mx-auto max-w-screen-xl bg-gray-200 h-screen gap-4">
      <div className="w-full flex justify-between gap-4 p-2">
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
        <ChartCard title="Income Expense" />
      </div>
      <div></div>
    </div>
  );
};
export default Dashboard;
