const TestHeader = (props) => {
  return (
    <div className="test__container-wrapper self-start">
      <div className="test__content-title">
        {props.ask}
      </div>
      <div className="test__completed-result">{props.currentAsk}/{props.askCount}</div>
    </div>
  );
};

export default TestHeader;
