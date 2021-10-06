const ContentList = (props) => {
  if (!props.info) {
    const info = [{ text: "Текст 1" }, { text: "Текст 2" }];
    const items = info.map((i) => <ContentListItem text={i.text} />);
    return <ul class="cource__content-list ">{items}</ul>;
  }

  const items = props.info.map((i) => <ContentListItem text={i.text} />);
  return <ul class="cource__content-list ">{items}</ul>;
};

const ContentListItem = (props) => {
  return <li class="course__list-item test__list-item">{props.text}</li>;
};

export default ContentList;
