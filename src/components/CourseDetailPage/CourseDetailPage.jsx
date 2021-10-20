import { useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import CourseDetailExperts from "../CourseDetailExperts/CourseDetailExperts";
import CourseDetailContent from "../CourseDetailInfo/CourseDetailContent";
import CourseDetailList from "../CourseDetailList/CourseDetailList";
import CourseDetailMore from "../CourseDetailMore/CourseDetailMore";
import CourseDetailPreview from "../CourseDetailPreview/CourseDetailPreview";

const CourseDetailPage = (props) => {

  let [courses, setCourses] = useState();
  useEffect(() => {
    coursesAPI.courses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  return (
    <>
      <CourseDetailPreview courseDetailData={props.courseDetailData} />

      <section class="cource__info">
        <h2 class="title">Информация</h2>
        <CourseDetailContent contentList={props.courseDetailData.contentList} />

        <CourseDetailList
          willLearnList={props.courseDetailData.willLearnList}
        />

        <CourseDetailExperts experts={props.courseDetailData.experts }/>

        {courses ? (
          <CourseDetailMore
          courses={courses}
            getCourseId={props.getCourseId}
            courseId={props.courseId}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};
export default CourseDetailPage;
