import {
  CashBalance,
  CurrencySelect,
  FinishSignup,
  Loading,
  SignUp,
} from "@/components/";
import { useState } from "react";
import Dashboard from "../dashboard";
import Link from "next/link";

const signUp = () => {
  const Stepper = [Loading, CashBalance, CurrencySelect, FinishSignup];
  const [step, setStep] = useState(0);
  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <Link href="/dashboard">
        {" "}
        <span> Dashboard ruu orno uu</span>
      </Link> */}

      {step === 0 && <Loading stage={step} nextHandle={handleNext} />}

      {step === 1 && <CurrencySelect stage={step} nextHandle={handleNext} />}
      {step === 2 && <CashBalance stage={step} nextHandle={handleNext} />}
      {step === 3 && <FinishSignup stage={step} nextHandle={handleNext} />}
    </div>
  );
};
export default signUp;
