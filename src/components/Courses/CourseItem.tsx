import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import actionToggle from "../../utils/actionToggle/actionToggle";
import FavoriteToggle from "../common/FavoriteToggle";

type TProps = {
  id: number | string;
  tier: any;
  title: string;
  description: string;
  author: { img: string; name: string };
};

const CourseItem: React.FC<TProps> = ({
  id,
  tier,
  title,
  description,
  author,
}) => {
  const context = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);
  const getIsFavorite = () => {
    actionToggle(isFavorite, setIsFavorite);
  };

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
          action={getIsFavorite}
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

export default CourseItem
