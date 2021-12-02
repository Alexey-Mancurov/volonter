import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import FavoriteToggle from "../common/FavoriteToggle";

const CourseItem = (props) => {
  const context = useContext(Context);

  return (
    <div className="courses__list-item">
      <div className="courses__item-wrapper">
        <div className="courses__item-container">
          {props.tier ? (
            <p className="courses__item-level">Продвинутый</p>
          ) : (
            <p className="courses__item-level">Базовый</p>
          )}
          <div className="courses__item-title">{props.title}</div>
        </div>
        <FavoriteToggle
          isFavorite={props.isFavorite}
          id={props.id}
          action={props.favoriteToggle}
        />
      </div>
      <p className="courses__item-text">{props.description}</p>
      <div className="courses__item-footer">
        <div className="courses__item-footer-inner">
          <img src={props.author.img} alt="" className="courses__item-img" />
          <div className="courses__item-footer-box">
            <p className="courses__item-name">{props.author.name}</p>
            <p className="courses__item-status">Автор курса</p>
          </div>
        </div>
        <NavLink
          to={{
            pathname: "/courseDetail",
            state: {
              courseId: props.id,
            },
          }}
          className="test__ask-blue courses__item-btn"
          onClick={() => context.getCourseId(props.id)}
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
