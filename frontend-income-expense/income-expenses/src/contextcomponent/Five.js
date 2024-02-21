import { Six } from "@/contextcomponent/Six";
export const Five = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Six ssname={ssname} />
    </div>
  );
};
