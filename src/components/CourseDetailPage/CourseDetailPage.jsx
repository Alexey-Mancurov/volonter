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

  let contentList

  if(props.courseDetailData){
    contentList = props.courseDetailData.contentList.map((i,index)=>(
      <CourseDetailContent key={index} title={i.title} text={i.text}/>
    ))
  }

  return (
    <>
      <CourseDetailPreview courseDetailData={props.courseDetailData} />

      <section className="cource__info">
        <h2 className="title">Информация</h2>
        {contentList}

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
