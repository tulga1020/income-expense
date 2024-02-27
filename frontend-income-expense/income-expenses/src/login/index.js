import { RightBlueWall } from "@/components/RightBlueWall";
import { SignIn } from "@/components/SignIn";
import { LeftWhiteWall } from "@/components/LeftWhiteWall";
const loggedin = () => {
  return (
    <div className="w-screen h-screen flex">
      <SignIn />
      <RightBlueWall />
    </div>
  );
};
export default loggedin;
