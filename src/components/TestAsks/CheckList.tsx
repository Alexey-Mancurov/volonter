import CheckItem from "./CheckItem";

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

  return <div className="test__ask">{askList}</div>;
};

export default CheckList;
