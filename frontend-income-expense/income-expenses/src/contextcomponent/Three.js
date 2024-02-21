import { Four } from "@/contextcomponent/Four";
export const Three = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Four ssname={ssname} />
    </div>
  );
};
