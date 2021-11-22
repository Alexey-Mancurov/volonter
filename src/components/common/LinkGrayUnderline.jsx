
const LinkGrayUnderline = ({action, data, child, baseValue }) => {

  return (
    <div
      className={`course__header-favorit`}
      onClick={() => {
        action(data);
      }}
    >
      {child || baseValue}
    </div>
  );
};

export default LinkGrayUnderline;
