import {
  CashBalance,
  CurrencySelect,
  FinishSignup,
  Loading,
} from "@/components/";
import { useState } from "react";
const signUp = () => {
  const Stepper = [Loading, CashBalance, CurrencySelect, FinishSignup];
  const [step, setStep] = useState(4);
  const Step = Stepper[step];
  if (step < Stepper.length) return <Step />;
  return (
    <div className="w-screen h-screen flex">
      <Loading />
      {/* <CurrencySelect />
      <CashBalance />
      <FinishSignup /> */}
    </div>
  );
};
export default signUp;
