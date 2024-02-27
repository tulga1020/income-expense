import { Home } from "./Svg";
export const Records = () => {
  return (
    <div className="w-full bg-white px-4 pt-4 object-cover">
      <div className="w-full bg-white flex justify-between">
        <div className="flex gap-4 items-center">
          <Home />
          <div className="flex flex-col">
            <h2 className="text-lg">Lending Renting</h2>
            <p className="text-gray-400">3 hours ago</p>
          </div>
        </div>
        <div className="text-[#84CC16]"> -1000$ </div>
      </div>
      <div className="divider my-0"></div>
    </div>
  );
};
