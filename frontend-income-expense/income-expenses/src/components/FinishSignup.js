import { BigText } from "./BigText";
import { Buttons } from "./Buttons";
import { Step } from "./Step";
import { FinishLogo } from "./Svg";
export const FinishSignup = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center gap-32 mt-4">
      <Step
        step1="step step-primary"
        step2="step step-primary"
        step3="step step-primary"
      />
      <div className="flex flex-col gap-4 items-center w-[384px] h-[304px]">
        <FinishLogo />
        <BigText bigtext="Good Job!" />
        <p className="text-xs w-full">
          Your very first account has been created. Now continue to dashboard
          and start tracking
          <Buttons
            bText="Go to Dashboard"
            bClass="rounded-xl bg-[#0166FF] text-white w-full h-12"
            //   buttonClick={}
          />
        </p>
      </div>
    </div>
  );
};
