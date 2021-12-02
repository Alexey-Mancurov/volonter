
type PropsType = {
  text: string
}
const ItemContent:React.FC<PropsType> = ({ text }) => {
  return <li className="course__list-item test__list-item">{text}</li>;
};
export default ItemContent;
