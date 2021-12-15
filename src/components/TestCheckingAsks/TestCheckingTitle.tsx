import s from './index.module.css'


type TProps = {
  num: number | string;
  answerCorrect: number;
  answerVolont: number;
};

const TestAskTitle:React.FC<TProps> = ({ num, answerCorrect, answerVolont }) => {
  return (
    <div className={s.titleBox}>
      <div className={s.title}>Вопрос {num}</div>
      {answerCorrect === answerVolont ? (
        <div className={`${s.notif} ${s.notifBlue}`}>
          Правильный ответ
        </div>
      ) : (
        <div className={`${s.notif} ${s.notifRed}`}>
          Неправильный ответ
        </div>
      )}
    </div>
  );
};

export default TestAskTitle;
