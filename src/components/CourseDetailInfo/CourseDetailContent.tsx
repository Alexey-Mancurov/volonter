import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

type PropsType = {
  title: string;
  text: string;
};
const CourseDetailContent = ({ title, text }: PropsType) => {
  return (
    <>
      <CourceTitle2 title={title} />
      <ContentBoxCource child={<p>{text}</p>} />
    </>
  );
};

export default CourseDetailContent;
