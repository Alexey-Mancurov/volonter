const ContentList = (props) => {
  if (!props.info) {
    const info = [{ text: "Текст 1" }, { text: "Текст 2" }];
    // пока нет id, заменил на index в map
    const items = info.map((i, index) => <ContentListItem text={i.text} key={index}/>);
    return <ul className="cource__content-list ">{items}</ul>;
  }

  const items = props.info.map((i) => <ContentListItem text={i.text} />);
  return <ul className="cource__content-list ">{items}</ul>;
};

const ContentListItem = (props) => {
  return <li className="course__list-item test__list-item">{props.text}</li>;
};

export default ContentList;
