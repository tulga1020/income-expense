import { Eight } from "@/contextcomponent/Eight";
export const Seven = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Eight ssname={ssname} />
    </div>
  );
};
