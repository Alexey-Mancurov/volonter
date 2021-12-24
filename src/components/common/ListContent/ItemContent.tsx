import s from './index.module.css'
import { FC } from "react";

interface PropsType  {
  text: string
}
const ItemContent:FC<PropsType> = ({ text }) => {
  return <li className={s.item}>{text}</li>;
};
export default ItemContent;
