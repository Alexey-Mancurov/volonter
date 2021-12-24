import NumFractionalInCircle from "../common/NumFractionalInCircle/NumFractionalInCircle";
import NumInCircle from "../common/NumInCircle/NumInCircle";
import s from "./index.module.css";
import { FC } from "react";

interface TProps {
  num?: number;
  title?: string;
  numCurrent?: number;
  numAll?: number;
  isFractional?: boolean;
};

const BaseData: FC<TProps> = ({
  num,
  title,
  numCurrent,
  numAll,
  isFractional,
}) => {
  return (
    <div className={s.box}>
      {isFractional ? (
        <NumFractionalInCircle numCurrent={numCurrent} numAll={numAll} />
      ) : (
        <NumInCircle num={num} />
      )}
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BaseData;
