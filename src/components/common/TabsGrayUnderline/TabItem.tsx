import tabsToggle from "../../../utils/tabsToogle/tabsToogle";
import s from './index.module.css'

type PropsType = {
  index: number;
  isIndex?: boolean;
  text: string;
  data: string;
  currentActive: number |null | undefined;
  setActive: Function;
  action: Function;
};

const TabItem: React.FC<PropsType> = ({
  index,
  isIndex,
  text,
  data,
  currentActive,
  setActive,
  action,
}) => {
  return (
    <div
      className={`${s.item} ${
        currentActive === index ? s.itemActive : ""
      }`}
      onClick={(e) => {
        tabsToggle(action, setActive, isIndex, index, data, e)
      }}
    >
      {text}
    </div>
  );
};

export default TabItem;
