import { useState, useEffect } from "react";
import { coursesAPI } from "../../api/api";
import filtration from "../../Controller/filtration";
import store from "../../store/store";
import Preloader from "../common/Preloader";
import CoursesHeader from "../CoursesHeader/CoursesHeader";
import CoursesList from "../CoursesList/CoursesList";

const Courses = () => {
  const [courses, setCourses] = useState();

  const favoriteToggle = (courseId) => {
    coursesAPI.courseFavorite(courseId).then((response) => {
      if (response.success) {
        coursesAPI.courses().then((courses) => {
          setCourses(courses);
        });
      }
    });
  };

  useEffect(() => {
    setCourses(store.coursesAPI.courses)
  }, []);

  const [filter, setFilter] = useState();

  useEffect(() => {
    if (courses) {
      setFilter(courses.items.filter((item) => item.id));
    }
  }, [courses]);

  const filterStatic = [
    { text: "Все курсы", path: "allCourses" },
    { text: "Избранные", path: "filterFavorits" },
    { text: "Пройденные", path: "filterCompleted" },
  ];

  const filterLevel = [
    { text: "Базовый", path: "base" },
    { text: "Продвинутый", path: "advanced" },
  ];

  const complienceFilter = {
    allCourses: "id",
    filterFavorits: "isFavorite",
    filterCompleted: "isCompleted",
    base: "!tier",
    advanced: "tier",
  };

  const getFilter = (param) => {
    filtration(courses.items, complienceFilter, param, setFilter);
  };


  if (courses) {
    return (
      <>
        <h1 className="title">Курсы</h1>

        <CoursesHeader
          filterStatic={filterStatic}
          filterLevel={filterLevel}
          getFilter={getFilter}
        />

        <CoursesList courses={filter} favoriteToggle={favoriteToggle} />
      </>
    );
  } else {
    return <Preloader />;
  }
};

export default Courses;
