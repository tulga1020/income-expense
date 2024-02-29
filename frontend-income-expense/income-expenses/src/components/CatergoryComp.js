import { CategoryItems } from "./CategoryItems";
export const CategoryComp = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="text-semibold">Category</div>
        <div className="text-gray-400">Clear</div>
      </div>
      <CategoryItems />
    </div>
  );
};
