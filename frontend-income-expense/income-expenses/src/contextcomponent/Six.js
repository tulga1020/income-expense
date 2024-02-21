import { Seven } from "@/contextcomponent/Seven";
export const Six = (props) => {
  const { ssname } = props;
  return (
    <div>
      <Seven ssname={ssname} />
    </div>
  );
};
