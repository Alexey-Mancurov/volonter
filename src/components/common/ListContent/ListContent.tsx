import ItemContent from "./ItemContent";

type PropsType = {
  list: Array<string>;
};
const ListContent: React.FC<PropsType> = ({ list }) => {
  console.log(list);
  let items;

  if (list) {
    items = list.map((i, index) => <ItemContent text={i} key={index} />);
  }

  return <ul className="cource__content-list">{items}</ul>;
};

export default ListContent;
