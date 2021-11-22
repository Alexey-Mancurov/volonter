const TabItem = ({
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
        currentActive === index ? "course__header-favorit-active" : ''
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
