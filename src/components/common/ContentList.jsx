const ContentList = (props) => {
  const items = props.info.map((i) => <ContentListItem text={i} />);
  return <ul className="cource__content-list ">{items}</ul>;
};

const ContentListItem = (props) => {
  return <li className="course__list-item test__list-item">{props.text}</li>;
};

export default ContentList;
