import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import Preloader from "../common/Preloader";
import CoursesHeader from "../CoursesHeader/CoursesHeader";
import CoursesList from "../CoursesList/CoursesList";

const Courses = (props) => {
  const favoriteToggle = (courseId) => {
    coursesAPI.courseFavorite(courseId).then((response) => {
      if (response.success) {
        coursesAPI.courses().then((courses) => {
          setCourses(courses);
        });
      }
    });
  };

  let [courses, setCourses] = useState();
  useEffect(() => {
    coursesAPI.courses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  let [filter, setFilter] = useState();

  useEffect(() => {
    if (courses) {
      setFilter(courses.items.filter((item) => item.id));
    }
  }, [courses]);

  const allCourses = () => {
    setFilter(courses.items.filter((item) => item.id));
  };

  const filterFavorits = () => {
    setFilter(courses.items.filter((item) => item.isFavorite === true));
  };

  const filterCompleted = () => {
    setFilter(courses.items.filter((item) => item.isCompleted === true));
  };

  const filterBase = () => {
    setFilter(courses.items.filter((item) => item.tier === false));
  };

  const filterAdvanced = () => {
    setFilter(courses.items.filter((item) => item.tier === true));
  };

  if (courses) {
    return (
      <>
        <h1 className="title">Курсы</h1>

        <CoursesHeader
          allCourses={allCourses}
          filterFavorits={filterFavorits}
          filterCompleted={filterCompleted}
          filterBase={filterBase}
          filterAdvanced={filterAdvanced}
        />

        <CoursesList
          courses={filter}
          getCourseId={props.getCourseId}
          favoriteToggle={favoriteToggle}
        />
      </>
    );
  } else {
    return <Preloader />;
  }
};

export default Courses;
