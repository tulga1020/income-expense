import { RightBlueWall, SignIn, SignUp } from "@/components/";
import { useState } from "react";
const Stepper = [RightBlueWall, SignIn, SignUp];
export default function Home() {
  const [step, setStep] = useState(3);
  const Step = Stepper[step];
  if (step < Stepper.length) return <Step />;
  // const [ssname, setSsname] = useState("Darkhan");

  return (
    <div>
      {/* <One ssname={ssname} /> */}
      <div className="w-screen h-screen flex">
        <SignIn />
        <RightBlueWall />
      </div>
    </div>
  );
}
