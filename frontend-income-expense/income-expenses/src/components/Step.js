import { Svg, Geld } from "./Svg";
export const Step = (props) => {
  const { step1, step2, step3 } = props;
  //   step-primary
  //   steps
  //   step
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center gap-2">
        <Svg />
        <Geld />
      </div>
      <ul className="steps">
        <li className={step1}>Currency</li>
        <li className={step2}>Balance</li>
        <li className={step3}>Finish</li>
      </ul>
    </div>
  );
};
