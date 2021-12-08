type TProps = {
  index: number;
  title: string;
  action: (index: number) => void;
};

const CheckItem:React.FC<TProps> = ({ index, title, action }) => {
  const localGetCheckedOption = () => {
    action(index);
  };

  return (
    <label className="test__ask-labelRadio">
      <input
        name="ask-1"
        type="radio"
        className="test__ask-inputRadio"
        onChange={localGetCheckedOption}
      ></input>
      <span className="test__ask-checkboxRadio"></span>
      <span className="test__ask-textRadio">{title}</span>
    </label>
  );
};

export default CheckItem;
