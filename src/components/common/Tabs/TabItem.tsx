import React from "react";
import tabsToggle from "../../../utils/tabsToogle/tabsToogle";

type PropsType = {
  index: number;
  isIndex?: boolean;
  text: string;
  data: string;
  currentActive: number;
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
    <li className="tabs__item ">
      <div
        onClick={(e) => {
          tabsToggle(action, setActive, isIndex, index, data, e)
        }}
        className={`tabs__link tabs__course-link ${
          currentActive === index && "active"
        }`}
      >
        {text}
      </div>
    </li>
  );
};

export default React.memo(TabItem, (prev, next) => {
  if (next.currentActive === next.index) {
    return false;
  }
  if (prev.currentActive === prev.index) {
    return false;
  }
  return true;
});
