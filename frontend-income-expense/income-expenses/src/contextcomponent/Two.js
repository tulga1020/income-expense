import { Three } from "./Three";
export const Two = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Three ssname={ssname} />
    </div>
  );
};
