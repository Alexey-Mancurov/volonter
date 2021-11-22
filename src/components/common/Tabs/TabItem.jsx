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
    <li className="tabs__item ">
      <div
        onClick={(e) => {
          action(isIndex ? index : data, e);
          setActive(index);
        }}
        class={`tabs__link tabs__course-link ${
          currentActive === index && "active"
        }`}
      >
        {text}
      </div>
    </li>
  );
};

export default TabItem;
