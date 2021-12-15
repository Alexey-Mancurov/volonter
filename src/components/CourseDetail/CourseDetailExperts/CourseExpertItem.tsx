import s from './index.module.css'

type PropsType = {
  img: string;
  name: string;
  description: string;
};

const CourseExpertItem = ({ img, name, description }: PropsType) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={img} alt="" />
      <p className={s.name}>{name}</p>
      <p className={s.text}>{description}</p>
    </div>
  );
};
export default CourseExpertItem;
