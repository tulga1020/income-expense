import { Five } from "@/contextcomponent/Five";
export const Four = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Five ssname={ssname} />
    </div>
  );
};
