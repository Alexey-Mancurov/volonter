import s from "./index.module.css";
import { FC } from "react";


type TProps={
  askCount: number | string;
  currentAsk: number | string;
  localNextAsk:  ()=>void;
  localPrevAsk: ()=>void;
}

const Actions:FC<TProps> = ({
  // completedResponse,
  currentAsk,
  localPrevAsk,
  askCount,
  localNextAsk,
}) => {

  return (
    <div className={s.askWrapper}>
      {currentAsk !== 1 && (
        <div className={s.btn} onClick={localPrevAsk}>
          Назад
        </div>
      )}
      {currentAsk !== askCount && currentAsk < askCount ? (
        <div className={s.btnRed} onClick={localNextAsk}>
          Следующий вопрос
        </div>
      ) : (
        <div
          className={s.btnRed}
          onClick={() => {
            localNextAsk();
          }}
        >
          Завершить Тест
        </div>
      )}
    </div>
  );
};

export default Actions;
