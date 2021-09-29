import TestAskActions from "../TestAskActions/TestAskActions";
import TestAskItem from "../TestAskItem/TestAskItem";

const TestAsk = (props) => {


  const askList = props.options.map((i) => <TestAskItem title={i.title} />);

  return props.currentAsk === props.id ? (
    <div class="test__ask">
      {askList}
      <TestAskActions currentAsk={props.currentAsk} nextAsk={props.nextAsk} prevAsk={props.prevAsk} asksCount={props.asksCount}/>
    </div>
  ) : (
    ""
  );
};

export default TestAsk;
