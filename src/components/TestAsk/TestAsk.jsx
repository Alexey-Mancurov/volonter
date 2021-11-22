import TestAskItem from "../TestAskItem/TestAskItem";

const TestAsk = ({ options, getCheckedOption }) => {
  let askList;

  if (options) {
    askList = options.map((i, index) => (
      <TestAskItem
        title={i}
        key={index}
        index={index}
        action={getCheckedOption}
      />
    ));
  }

  return <div className="test__ask">{askList}</div>;
};

export default TestAsk;
