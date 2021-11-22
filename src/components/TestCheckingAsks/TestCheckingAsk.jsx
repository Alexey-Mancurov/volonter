import TestCheckingTitle from "./TestCheckingTitle";

const TestCheckingAsks = ({dataList}) => {
  let answersListChecking;
  if (dataList) {
    answersListChecking = dataList.map((i) => (
      <TestCheckingdAskItem
        num={i.id}
        key={i.id}
        ask={i.ask}
        options={i.options}
      />
    ));
  }

  return <div>{answersListChecking}</div>;
};

const TestCheckingdAskItem = ({options, num, ask}) => {
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

export default TestCheckingAsks;
