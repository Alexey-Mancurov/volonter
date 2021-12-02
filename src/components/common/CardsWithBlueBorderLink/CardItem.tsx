import { Link } from "react-router-dom";

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
    <div className="swiper-slide cource__swiper-slide">
      <p className="course__title-4 cource__swiper-title">{title}</p>
      <p className="course__text cource__swiper-text">{description}</p>
      <Link
        to={"/courseDetail"}
        onClick={() => {
          action(id);
          window.location.reload();
        }}
        className="cource__swiper-btn"
      >
        {text}
      </Link>
    </div>
  );
};

export default CardItem;