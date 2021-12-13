import React, { useContext, useState } from "react";
import Context from "../../context/context";
import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import Preloader from "../common/Preloader";
import Tabs from "../common/Tabs";
import CourseDetailHeader from "./CourseDetailHeader";
import CourseInside from "./CourseInside/CourseInside";
import CourseMaterials from "./CourseMaterials/CourseMaterials";
import CourseReviews from "./CourseReviews/CourseReviews";
import CourseDetailPage from "./CourseDetailPage";

const CourseDetail = () => {
  const context = useContext(Context);

  const tabsData = [
    { text: "Информация", path: "/" },
    { text: "Содержание", path: "/inside" },
    { text: "Материалы", path: "/materials" },
    { text: "Отзывы", path: "/reviews" },
  ];

  const [path, setPath] = useState("/");

  const [indexCurrentTab, setIndexCurrentTab] = useState(0);
  const courseDetailData: Array<any> | undefined = useRequestData(
    //@ts-ignore
    [store.coursesAPI.coursesDetail[context.courseId]],
    [context.courseId]
  );

  if (context.modules && courseDetailData) {
    return (
      <>
        {/*@ts-ignore*/}
        <CourseDetailHeader time={courseDetailData.time} />
        <Tabs
          list={tabsData}
          action={setPath}
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
