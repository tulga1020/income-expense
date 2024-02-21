import { BigText } from "./BigText";
import { Buttons } from "./Buttons";
import { Step } from "./Step";
import { CurrencyLogo } from "./Svg";
export const CurrencySelect = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center gap-32 mt-4">
      <Step step1="step step-primary" step2="step" step3="step" />
      <div className="flex flex-col gap-4 items-center w-[384px] h-[304px]">
        <BigText bigtext="Select base currency" />
        <CurrencyLogo />
        <select className="select select-bordered w-full max-w-xs h-8 bg-gray-200">
          <option selected>MNT - Mongolian Tugrik</option>
          <option>KW - Korean Won</option>
          <option>USD - Amirca Dollar</option>
          <option>JPY - Japan Yen</option>
        </select>
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
