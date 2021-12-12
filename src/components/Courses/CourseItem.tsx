import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import FavoriteToggle from "../common/FavoriteToggle";

type TProps = {
  id: number | string;
  tier: any;
  title: string;
  description: string;
  isFavorite: boolean;
  favoriteToggle: any;
  author: { img: string; name: string };
};

const CourseItem:React.FC<TProps> = ({
  id,
  tier,
  title,
  description,
  isFavorite,
  favoriteToggle,
  author,
}) => {
  const context = useContext(Context);

  return (
    <div className="courses__list-item">
      <div className="courses__item-wrapper">
        <div className="courses__item-container">
          {tier ? (
            <p className="courses__item-level">Продвинутый</p>
          ) : (
            <p className="courses__item-level">Базовый</p>
          )}
          <div className="courses__item-title">{title}</div>
        </div>
        <FavoriteToggle
          isFavorite={isFavorite}
          id={id}
          action={favoriteToggle}
        />
      </div>
      <p className="courses__item-text">{description}</p>
      <div className="courses__item-footer">
        <div className="courses__item-footer-inner">
          <img src={author.img} alt="" className="courses__item-img" />
          <div className="courses__item-footer-box">
            <p className="courses__item-name">{author.name}</p>
            <p className="courses__item-status">Автор курса</p>
          </div>
        </div>
        <NavLink
          to={{
            pathname: `/courseDetail/${id}`,
            state: {
              courseId: id,
            },
          }}
          className="test__ask-blue courses__item-btn"
          onClick={() => context.getCourseId(id)}
        >
          Пройти курс
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(CourseItem, (prev, next) => {
  if (prev.isFavorite !== next.isFavorite) {
    return false;
  }
  return true;
});
