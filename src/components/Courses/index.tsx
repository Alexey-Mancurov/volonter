import { useState, useEffect } from "react";
import filtration from "../../utils/filtration/filtration";
import store from "../../store/store";
import Preloader from "../common/Preloader";
import Header from "./Header";
import List from "./List";


type TFFavToggle = (courseId: number) => {response:{success:boolean}} | void

const Courses = () => {
  const [courses, setCourses] = useState<object>();

  const favoriteToggle:TFFavToggle = (courseId) => {
    // coursesAPI.courseFavorite(courseId)
    // .then((response) => {
    //   // @ts-ignore
    //   if (response.success) {
    //     coursesAPI.courses().then((courses) => {
    //       setCourses(courses);
    //     });
    //   }
    // });
  };

  useEffect(() => {
    setCourses(store.coursesAPI.courses);
  }, []);

  const [filter, setFilter] = useState();

  useEffect(() => {
    if (courses) {
      // @ts-ignore
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

  const getFilter = (param:string) => {
    // @ts-ignore
    filtration(courses.items, complienceFilter, param, setFilter);
  };

  if (courses) {
    return (
      <>
        <h1 className="title">Курсы</h1>

        <Header
          filterStatic={filterStatic}
          filterLevel={filterLevel}
          getFilter={getFilter}
        />

        <List courses={filter} favoriteToggle={favoriteToggle} />
      </>
    );
  } else {
    return <Preloader />;
  }
};

export default Courses;
