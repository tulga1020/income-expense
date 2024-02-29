import { Input } from "@/components/Input";

export const Amount = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-semibold">Amount Range </h1>
      <div className="flex gap-4">
        <Input
          inputClass="bg-gray-200 w-6/12 rounded-lg px-3 py-2"
          inputType="number"
          inputPlaceholder="0"
        />
        <Input
          inputClass="bg-gray-200 w-6/12 rounded-lg px-3 py-2"
          inputType="number"
          inputPlaceholder="1000"
        />
      </div>
    </div>
  );
};
