import { Fifteen } from "@/contextcomponent/Fifteen";
export const Fourteen = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Fifteen ssname={ssname} />
    </div>
  );
};
