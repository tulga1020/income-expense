import { Svg, Geld, LoadSvg } from "./Svg";
export const Loading = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
      <div className=" flex gap-2">
        <Svg />
        <Geld />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <LoadSvg />
        Түр хүлээнэ үү
      </div>
    </div>
  );
};
