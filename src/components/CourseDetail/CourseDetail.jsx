import { useContext, useState, useEffect } from "react";
import Context from "../../context/context";
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
  const getPath = (action) => {
    setPath(action);
  };

  const [indexCurrentTab, setIndexCurrentTab] = useState(0);

  const [courseDetailData, setCourseDetailData] = useState();
  useEffect(() => {
    setCourseDetailData(store.coursesAPI.coursesDetail[context.courseId])
  }, [context.courseId]);

  if (context.modules && courseDetailData) {
    return (
      <>
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
        {path === "/reviews" && <CourseReviews tabsData={tabsData} />}
      </>
    );
  } else {
    return <Preloader />;
  }
};
export default CourseDetail;
