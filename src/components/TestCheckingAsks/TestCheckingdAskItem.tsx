import TestCheckingTitle from "./TestCheckingTitle";
import s from './index.module.css'

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
    <div className={s.ask}>
      <TestCheckingTitle
        num={num}
        answerCorrect={answerCorrect}
        answerVolont={answerVolont}
      />
      <p className={s.text}>{ask}</p>
      <div className={s.text}>
        {allAnswers[answerCorrect]}
      </div>
    </div>
  );
};

export default TestCheckingdAskItem;
