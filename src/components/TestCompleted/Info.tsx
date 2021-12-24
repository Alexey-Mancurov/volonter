import s from './index.module.css'
import { FC } from "react";


interface TProps {
  sertificate: string;
  successAsks: number | string;
  totalAsk: number | string;
};

const Info:FC<TProps> = ({ sertificate, successAsks, totalAsk }) => {
  return (
    <div className={s.completed}>
      <div className={s.completedWrapper}>
        <div className={s.completedTitle}>Тест завершен</div>
        <div className={s.result}>
          {successAsks}/{totalAsk}
        </div>
      </div>
      <div className={s.completedText}>
        Ваш результат:{" "}
        <span>
          {successAsks} балла из {totalAsk}
        </span>
      </div>
      <div className={s.endActions}>
        <div className={s.redBtn}>Готово</div>
        <a
          href={sertificate}
          className={s.blueBtn}
          download
        >
          Скачать сертификат
        </a>
      </div>
    </div>
  );
};

export default Info;
