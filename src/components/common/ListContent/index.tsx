import ItemContent from "./ItemContent";
import s from './index.module.css'

type PropsType = {
  list: Array<string>;
};
const ListContent: React.FC<PropsType> = ({ list }) => {
  let items;

  if (list) {
    items = list.map((i, index) => <ItemContent text={i} key={index} />);
  }

  return <ul className={s.list}>{items}</ul>;
};

export default ListContent;
