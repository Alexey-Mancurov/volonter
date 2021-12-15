import s from "./index.module.css";

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
    <label className={s.labelRadio}>
      <input
        name="ask-1"
        type="radio"
        className={s.inputRadio}
        onChange={localGetCheckedOption}
      ></input>
      <span className={s.checkboxRadio}></span>
      <span className={s.textRadio}>{title}</span>
    </label>
  );
};

export default CheckItem;
