import { Logo, Nfc } from "./Svg";
import Image from "next/image";
export const Card = () => {
  return (
    <div className="w-4/12 h-56 rounded-lg relative ">
      <Image src="/Large.png" layout="fill" className="z-0" />
      <div className="w-full h-full absolute z-10 top-0 p-8 flex flex-col justify-between">
        <div className="flex flex-col ">
          <Logo />
        </div>
        <div>
          <div className="text-gray-200">Cash</div>
          <div className="w-full flex justify-between">
            <div className="text-white font-bold text-xl ">10,000,00</div>
            <div>
              <Nfc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
