import s from './index.module.css'
import { FC } from "react";

interface PropsType  {
  img: string;
  name: string;
  description: string;
};

const CourseExpertItem:FC<PropsType> = ({ img, name, description }) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={img} alt="" />
      <p className={s.name}>{name}</p>
      <p className={s.text}>{description}</p>
    </div>
  );
};
export default CourseExpertItem;
