import { UpIcon } from "./Svg";
export const ExpenseCard = (props) => {
  const { title, totalamount, percentage } = props;
  return (
    <div className="totalCard">
      <div className="flex gap-4 items-center p-4 mb-[-2]">
        <div className="w-2 h-2 rounded-full bg-[#84CC16]"></div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="divider my-0"></div>
      <div className="flex flex-col p-4 justify-between gap-4">
        <div>
          <div className="text-3xl font-bold">{totalamount}</div>
          <div className="text-gray-400">Your Income Amount</div>
        </div>
        <div className="flex gap-2 items-center">
          <UpIcon />
          <div>{percentage}from last month</div>
        </div>
      </div>
    </div>
  );
};
