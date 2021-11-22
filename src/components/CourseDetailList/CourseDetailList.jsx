import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

const CourseDetailList = (props) => {

  let list
  if (props.willLearnList.items) {
    list = props.willLearnList.items.map((i, index) => (
      <li key={index} className="course__list-item cource__info-list-item">
        {i}
      </li>
    ));
  }

  return (
    <>
      <CourceTitle2 title={props.willLearnList.title} />
      <ContentBoxCource
        child={<ul className="cource__content-list">{list}</ul>}
      />
    </>
  );
};

export default CourseDetailList;
