import { useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import Preloader from "../common/Preloader";
import CourseDetailHeader from "../CourseDetailHeader/CourseDetailHeader";
import CourseDetailPage from "../CourseDetailPage/CourseDetailPage";
import CourseDetailTabs from "../CourseDetailTabs/CourseDetailTabs";
import CourseInside from "../CourseInside/CourseInside";
import CourseMaterials from "../CourseMaterials/CourseMaterials";
import CourseReviews from "../CourseReviews/CourseReviews";

const CourseDetail = (props) => {
  useEffect(() => {
    if (!props.courseId) {
      props.setReservedCourseId(
        JSON.parse(window.localStorage.getItem("courseId"))
      );
    }
  }, []);

  let [tabsData, setTabsData]=useState([
      {text: 'Информация', path: '/', isActive: true},
      {text: 'Содержание', path: '/inside', isActive: false},
      {text: 'Материалы', path: '/materials', isActive: false},
      {text: 'Отзывы', path: '/reviews', isActive: false},
  ])
  let [path, setPath] = useState("/");

  const isActiveToggle = (index) => {
    setTabsData(
        tabsData.map((i, ind) => {
        if (ind === index) {
          return { ...i, isActive: true };
        }
        if (ind !== index) {
          return { ...i, isActive: false };
        }
      })
    );
  };

  const getPath = (action) => {
    setPath(action);
  };
  let [courseDetailData, setCourseDetailData]=useState()
  useEffect(()=>{
    coursesAPI.coursesDetail(props.courseId).then((courseDetailData)=>{
      setCourseDetailData(courseDetailData)
    })
  }, [])


  if (props.modules && courseDetailData) {
    return (
      <>
        <CourseDetailHeader
          courseId={props.courseId}
          modulesLength={props.modules.items.length}
          lessonsLength={props.course.course.totalLessons}
          time={courseDetailData.time}
        />
        <CourseDetailTabs getPath={getPath} tabsData={tabsData} isActiveToggle={isActiveToggle}/>
        {path === "/" ? <CourseDetailPage courseId={props.courseId} courseDetailData={courseDetailData} getCourseId={props.getCourseId}/> : ""}
        {path === "/inside" ? <CourseInside modules={props.modules} courseId={props.courseId}/> : ""}
        {path === "/materials" ? <CourseMaterials modules={props.modules} courseId={props.courseId}/> : ""}
        {path === "/reviews" ? <CourseReviews courseId={props.courseId} tabsData={tabsData}/> : ""}
      </>
    );
  } else {
    return <Preloader />;
  }
};
export default CourseDetail;
