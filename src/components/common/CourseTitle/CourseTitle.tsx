import s from './index.module.css'

type PropsType = {
  title: string;
};
const CourseTitle: React.FC<PropsType> = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

export default CourseTitle;
