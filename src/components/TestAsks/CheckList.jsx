import CheckItem from "./CheckItem";

const CheckList = ({ options, getCheckedOption }) => {
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

  return <div className="test__ask">{askList}</div>;
};

export default CheckList;
