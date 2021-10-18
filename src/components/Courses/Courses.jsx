import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import Preloader from "../common/Preloader";
import CourseItem from "../CourseItem/CourseItem";
import CoursesHeader from "../CoursesHeader/CoursesHeader";
import CoursesList from "../CoursesList/CoursesList";

const Courses = (props) => {
  const favoriteToggle = (courseId) => {
    coursesAPI.courseFavorite(courseId).then((response) => {
      console.log(response);
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

  const allCourses = (e) => {
    setFilter(courses.items.filter((item) => item.id));
  };

  console.log(courses);
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
        <h1 class="title">Курсы</h1>

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
    return (
      <div>
        <Preloader />
      </div>
    );
  }
};

export default Courses;
