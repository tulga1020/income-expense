import { RightBlueWall } from "@/components/RightBlueWall";
import { SignUp } from "@/components/SignUp";
export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <SignUp />
      <RightBlueWall />
    </div>
  );
}
