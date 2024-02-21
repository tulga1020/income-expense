import { BigText } from "./BigText";
import { Step } from "./Step";
import { BalanceLogo } from "./Svg";
import { Buttons } from "./Buttons";
export const CashBalance = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center gap-32 mt-4">
      <div className="flex flex-col gap-4 items-center w-[384px] h-[304px] ">
        <Step
          step1="step step-primary"
          step2="step step-primary"
          step3="step"
        />
        <BalanceLogo />
        <BigText bigtext="Set up your cash Balance" />
        <p className="text-xs w-full">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <Buttons
          bText="Confirm"
          bClass="rounded-xl bg-[#0166FF] text-white w-full h-12"
          //   buttonClick={}
        />
      </div>
    </div>
  );
};
