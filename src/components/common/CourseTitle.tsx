type PropsType = {
  title: string;
};
const CourseTitle: React.FC<PropsType> = ({ title }) => {
  return <h1 className="title title-course">{title}</h1>;
};

export default CourseTitle;
