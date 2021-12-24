import s from './index.module.css'
import { FC } from "react";

interface PropsType  {
  text: string;
  addClass?: string;
};

const RedBtn:FC<PropsType> = ({ text, addClass }) => {
  return <div className={`${s.btn} ${addClass}`}>{text}</div>;
};

export default RedBtn;
