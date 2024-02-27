import { Buttons } from "./Buttons";
import { Input } from "./Input";
import { RadioComp } from "./RadioComp";

export const Sidebar = () => {
  return (
    <div className="h-[1082px] w-[282px] bg-white rounded-lg p-6 flex flex-col gap-6">
      <h1>Records</h1>
      <Buttons
        bText="+ Add"
        bClass="rounded-xl bg-[#0166FF] text-white w-full"
      />
      <Input
        inputType="text"
        inputPlaceholder="Search"
        inputClass="border rounded-lg bg-gray-100 w-full px-2 py-1 text-sm"
      />
      <div>
        <h1>Types</h1>
        <RadioComp />
      </div>
    </div>
  );
};
