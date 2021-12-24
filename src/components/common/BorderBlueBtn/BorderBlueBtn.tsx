import { FC } from 'react';
import s from './index.module.css'

interface PropsType {
  text: string;
  addClass?: string | undefined;
};
const BorderBlueBtn: FC<PropsType> = ({ text, addClass }) => {
  return <div className={`${s.btn} ${addClass}`}>{text}</div>;
};

export default BorderBlueBtn;
