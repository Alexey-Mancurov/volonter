import { useState } from "react";
import { NavLink } from "react-router-dom";
import { coursesAPI } from "../../api/api";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import CourseDetailAddedFavorite from "../CourseDetailAddedFavorite/CourseDetailAddedFavorite";

const CourseDetailHeader = (props) => {

    let [isFavorite, setIsFavorite]=useState()
  const favoriteToggle = (courseId) => {
    coursesAPI.courseFavorite(courseId).then((response) => {
      if (response.success) {
        setIsFavorite(response.isFavorite)
      }
    });
  };
  return (
    <div class="course__header">
      <div class="course__header-block">
        <div class="course__header-circle">
          <img src={icon1} alt="" />
        </div>
        <p class="course__header-title">
          {props.modulesLength} модуля и {props.asksLength} уроков
        </p>
      </div>
      <div class="course__header-block">
        <div class="course__header-circle">
          <img src={icon2} alt="" />
        </div>
        <p class="course__header-title">
          Прохождение <br /> {props.time}
        </p>
      </div>
      <div class="course__header-btn-box">
        <NavLink to={"/lesson"} class="course__header-btn">
          Пройти курс
        </NavLink>
        <CourseDetailAddedFavorite favoriteToggle={favoriteToggle} courseId={props.courseId} isFavorite={isFavorite}/>
      </div>
    </div>
  );
};

export default CourseDetailHeader;
