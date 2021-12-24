import s from './index.module.css'
import { FC } from "react";


interface PropsType  {
  title: string;
};
const CourceTitle2:FC<PropsType> = ({ title }) => {
  return <p className={s.title}>{title}</p>;
};

export default CourceTitle2;
