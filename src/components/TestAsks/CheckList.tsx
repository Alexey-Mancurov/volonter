import CheckItem from "./CheckItem";
import s from "./index.module.css";
import { FC } from "react";

interface TProps {
  options: Array<string>;
  getCheckedOption: (index: number) => void;
};

const CheckList: FC<TProps> = ({ options, getCheckedOption }) => {
  const askList = () => {
    return options?.map((i, index) => (
      <CheckItem
        title={i}
        key={index}
        index={index}
        action={getCheckedOption}
      />
    ));
  };

  return <div className={s.ask}>{askList()}</div>;
};

export default CheckList;
