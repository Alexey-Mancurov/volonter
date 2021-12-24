import s from './index.module.css'
import { FC } from "react";


interface PropsType  {
  title: string;
};
const CourseTitle: FC<PropsType> = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

export default CourseTitle;
