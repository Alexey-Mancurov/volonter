import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

const CourseDetailContent = (props) => {
  return (
    <>
      <CourceTitle2 title={props.title} />
      <ContentBoxCource child={<p>{props.text}</p>} />
    </>
  );
};

export default CourseDetailContent;
