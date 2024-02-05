export const Buttons = (props) => {
  const { bClass, bText, buttonClick } = props;
  return (
    <button className={bClass} onClick={buttonClick}>
      {bText}
    </button>
  );
};
