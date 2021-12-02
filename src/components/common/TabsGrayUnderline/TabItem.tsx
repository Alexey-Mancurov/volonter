type PropsType = {
  index: number;
  isIndex: boolean;
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
    <div
      className={`course__header-favorit ${
        currentActive === index ? "course__header-favorit-active" : ""
      }`}
      onClick={(e) => {
        action(isIndex ? index : data, e);
        setActive(index);
      }}
    >
      {text}
    </div>
  );
};

export default TabItem;
