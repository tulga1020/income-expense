import { Two } from "./Two";
export const One = (props) => {
  const { ssname } = props;
  return (
    <div className="bg-green-500 w-screen h-screen flex justify-center items-center">
      <Two ssname={ssname} />
    </div>
  );
};
