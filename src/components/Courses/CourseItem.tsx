import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import actionToggle from "../../utils/actionToggle/actionToggle";
import FavoriteToggle from "../common/FavoriteToggle/FavoriteToggle";
import s from "./index.module.css";


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
    <div className={s.item}>
      <div className={s.wrapper}>
        <div className={s.container}>
          {tier ? (
            <p className={s.level}>Продвинутый</p>
          ) : (
            <p className={s.level}>Базовый</p>
          )}
          <div className={s.title}>{title}</div>
        </div>
        <FavoriteToggle
          isFavorite={isFavorite}
          id={id}
          action={getIsFavorite}
        />
      </div>
      <p className={s.text}>{description}</p>
      <div className={s.footer}>
        <div className={s.footerInner}>
          <img src={author.img} alt="" className={s.img} />
          <div className={s.footerBox}>
            <p className={s.name}>{author.name}</p>
            <p className={s.status}>Автор курса</p>
          </div>
        </div>
        <NavLink
          to={{
            pathname: `/courseDetail/${id}`,
            state: {
              courseId: id,
            },
          }}
          className={s.btn}
          onClick={() => context.getCourseId(id)}
        >
          Пройти курс
        </NavLink>
      </div>
    </div>
  );
};

export default CourseItem
