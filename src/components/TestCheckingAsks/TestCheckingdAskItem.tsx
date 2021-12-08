import TestCheckingTitle from "./TestCheckingTitle";

type TProps = {
  options: Array<any>;
  num: number | string;
  ask: string;
};
const TestCheckingdAskItem: React.FC<TProps> = ({ options, num, ask }) => {
  const allAnswers = options;
  const answerCorrect = allAnswers[allAnswers.length - 2];
  const answerVolont = allAnswers[allAnswers.length - 1];

  return (
    <div className="test__ask">
      <TestCheckingTitle
        num={num}
        answerCorrect={answerCorrect}
        answerVolont={answerVolont}
      />
      <p className="test__container-text test__ask-question">{ask}</p>
      <div className="test__container-text test__ask-text">
        {allAnswers[answerCorrect]}
      </div>
    </div>
  );
};

export default TestCheckingdAskItem;
