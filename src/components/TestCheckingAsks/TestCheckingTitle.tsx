import s from './index.module.css'
import { FC } from "react";


interface TProps {
  num: number | string;
  answerCorrect: number;
  answerVolont: number;
};

const TestAskTitle:FC<TProps> = ({ num, answerCorrect, answerVolont }) => {
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
