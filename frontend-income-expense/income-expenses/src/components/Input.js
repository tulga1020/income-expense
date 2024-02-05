export const Input = (props) => {
  const { inputClass, inputType, inputPlaceholder, inputValue, inputChange } =
    props;
  return (
    <input
      className={inputClass}
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={inputChange}
    />
  );
};
