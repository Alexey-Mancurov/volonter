import CheckItem from "./CheckItem";
import s from "./index.module.css";

type TProps = {
  options: Array<string>;
  getCheckedOption: (index: number) => void;
};

const CheckList: React.FC<TProps> = ({ options, getCheckedOption }) => {
  let askList;

  if (options) {
    askList = options.map((i, index) => (
      <CheckItem
        title={i}
        key={index}
        index={index}
        action={getCheckedOption}
      />
    ));
  }

  return <div className={s.ask}>{askList}</div>;
};

export default CheckList;
