import s from './index.module.css'
import { FC } from "react";

interface PropsType  {
  num?: string | number;
};
const NumInCircle:FC<PropsType> = ({ num }) => {
  return <div className={s.num}>{num}</div>;
};

export default NumInCircle;
