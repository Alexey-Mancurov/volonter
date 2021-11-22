import { NavLink } from "react-router-dom";

const CardItem = ({ title, description, id, action, isReload, text }) => {
  return (
    <div className="swiper-slide cource__swiper-slide">
      <p className="course__title-4 cource__swiper-title">{title}</p>
      <p className="course__text cource__swiper-text">{description}</p>
      <NavLink
        to={"/courseDetail"}
        onClick={() => {
          action(id);
          isReload && window.location.reload()
        }}
        className="cource__swiper-btn"
      >
        {text}
      </NavLink>
    </div>
  );
};

export default CardItem;
