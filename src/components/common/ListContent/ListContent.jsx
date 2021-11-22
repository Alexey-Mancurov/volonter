import ItemContent from "./ItemContent";

const ListContent = ({ list }) => {
  let items;

  if (list) {
    items = list.map((i, index) => <ItemContent text={i} key={index} />);
  }

  return <ul className="cource__content-list">{items}</ul>;
};

export default ListContent;
