import { Buttons } from "./Buttons";

export const Sidebar = () => {
  return (
    <div className="h-[1082px] w-[282px] bg-[#E5E7EB] p-6">
      <h1>Records</h1>
      <Buttons bText="+ Add" bClass="rounded-xl bg-[#0166FF w-full" />
      <Input inputClass="border rounded-lg bg-[#D1D5DB] w-full" />
    </div>
  );
};
