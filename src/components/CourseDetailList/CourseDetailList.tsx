import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

type PropsType = {
  willLearnList: {
    items: Array<string>;
    title: string;
  };
};
const CourseDetailList:React.FC<PropsType> = ({ willLearnList }) => {
  let list;

  if (willLearnList.items) {
    list = willLearnList.items.map((i, index) => (
      <li key={index} className="course__list-item cource__info-list-item">
        {i}
      </li>
    ));
  }

  return (
    <>
      <CourceTitle2 title={willLearnList.title} />
      <ContentBoxCource
        child={<ul className="cource__content-list">{list}</ul>}
      />
    </>
  );
};

export default CourseDetailList;
