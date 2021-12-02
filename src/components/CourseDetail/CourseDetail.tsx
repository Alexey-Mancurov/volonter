import React, { useContext, useState, useCallback } from "react";
import Context from "../../context/context";
import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import Preloader from "../common/Preloader";
import Tabs from "../common/Tabs/Tabs";
import CourseDetailHeader from "../CourseDetailHeader/CourseDetailHeader";
import CourseDetailPage from "../CourseDetailPage/CourseDetailPage";
import CourseInside from "../CourseInside/CourseInside";
import CourseMaterials from "../CourseMaterials/CourseMaterials";
import CourseReviews from "../CourseReviews/CourseReviews";

const CourseDetail = () => {
  const context = useContext(Context);

  const tabsData = [
    { text: "Информация", path: "/" },
    { text: "Содержание", path: "/inside" },
    { text: "Материалы", path: "/materials" },
    { text: "Отзывы", path: "/reviews" },
  ];

  const [path, setPath] = useState("/");

  const getPath = useCallback((action) => {
    setPath(action);
  }, []);

  const [indexCurrentTab, setIndexCurrentTab] = useState(0);
  const courseDetailData: Array<any> | undefined = useRequestData(
    //@ts-ignore
    [store.coursesAPI.coursesDetail[context.courseId]],
    [context.courseId]
  );
  console.log(courseDetailData);

  if (context.modules && courseDetailData) {
    return (
      <>
        {/*@ts-ignore*/}
        <CourseDetailHeader time={courseDetailData.time} />
        <Tabs
          list={tabsData}
          action={getPath}
          setActive={setIndexCurrentTab}
          currentActive={indexCurrentTab}
        />
        {path === "/" && (
          <CourseDetailPage courseDetailData={courseDetailData} />
        )}
        {path === "/inside" && <CourseInside />}
        {path === "/materials" && <CourseMaterials />}
        {path === "/reviews" && <CourseReviews />}
      </>
    );
  } else {
    return <Preloader />;
  }
};
export default React.memo(CourseDetail);
