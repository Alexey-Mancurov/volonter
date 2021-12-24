
import s from './index.module.css'
import { FC } from "react";

interface PropsType  {
  numCurrent?: string | number;
  numAll?: string | number;
};

const NumFractionalInCircle: FC<PropsType> = ({ numCurrent, numAll }) => {
  return (
    <div className={s.num}>
      <p>
        <span>
          {numCurrent}/{numAll}
        </span>
      </p>
    </div>
  );
};

export default NumFractionalInCircle;
