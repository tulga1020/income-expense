import { Svg } from "./Svg";
import { Buttons } from "./Buttons";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="mx-auto gap-4 z-10 bg-gray-200">
      <div className="w-screen bg-white">
        <div className="bg-white max-w-screen-xl mx-auto h-[72px] flex items-center justify-between">
          <div className="flex gap-4">
            <Link href="/dashboard" className="flex gap-4">
              <Svg />
              <Buttons bText="Dashboard" />
            </Link>
            <Link href="/records">
              <Buttons bText="Records" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Buttons
              bText="+ Record"
              bClass="bg-[#0166FF] rounded-lg text-white px-2 py-1"
            />
            <div className="rounded-full w-10 h-10 bg-red-200 object-cover">
              <Image href="./propicture.png" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
