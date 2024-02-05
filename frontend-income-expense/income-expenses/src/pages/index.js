import { LeftWhiteWall } from "@/components/LeftWhiteWall";
import { RightBlueWall } from "@/components/RightBlueWall";
import { SignIn } from "@/components/SignIn";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <SignIn />
      <RightBlueWall />
    </div>
  );
}
