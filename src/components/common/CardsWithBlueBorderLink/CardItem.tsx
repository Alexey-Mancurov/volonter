import { Link } from "react-router-dom";
import actionWithDataAndScrollToTop from "../../../utils/actionWithDataAndScrollToTop/actionWithDataAndScrollToTop";
import s from './index.module.css'



type PropsType = {
  title: string;
  description?: string;
  id?: number;
  action: Function;
  text: string;
};
const CardItem: React.FC<PropsType> = ({
  title,
  description,
  id,
  action,
  text,
}) => {
  return (
    <div className={s.item}>
      <p className={`course__title-4 ${s.title}`}>{title}</p>
      <p className={`course__text ${s.text}`}>{description}</p>
      <Link
        to={`/courseDetail/${id}`}
        onClick={() => {
          actionWithDataAndScrollToTop(id, action)
        }}
        className={s.btn}
      >
        {text}
      </Link>
    </div>
  );
};

export default CardItem;
