import s from './index.module.css'

type PropsType = {
  text: string
}
const ItemContent:React.FC<PropsType> = ({ text }) => {
  return <li className={s.item}>{text}</li>;
};
export default ItemContent;
