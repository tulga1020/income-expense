import {
  CashBalance,
  CurrencySelect,
  FinishSignup,
  Loading,
} from "@/components/";
import { useState } from "react";
import Dashboard from "./dashboard";
import Link from "next/link";

const signUp = () => {
  const Stepper = [Loading, CashBalance, CurrencySelect, FinishSignup];
  const [step, setStep] = useState(4);
  const Step = Stepper[step];
  if (step < Stepper.length) return <Step />;
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <Link href="/dashboard">
        {" "}
        <span> Dashboard ruu orno uu</span>
      </Link> */}

      {/* <Loading /> */}
      {/* <CurrencySelect />
      <CashBalance />
      <FinishSignup /> */}
    </div>
  );
};
export default signUp;
