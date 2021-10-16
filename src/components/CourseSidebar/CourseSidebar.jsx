import { useEffect, useState } from "react";
import { coursesAPI } from "../../api/api";
import SidebarDataAboutTestDesctop from "./SidebarDataAboutTestDesctop";
import SidebarModuleBlock from "./SidebarModuleBlock/SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";
import {createBrowserHistory } from 'history'
import qs from 'qs'
import { useLocation } from "react-router";

const CourseSidebar = (props) => {
    // // Сохраняю данные в url, чтобы при перезагрузке не слетало
    // const history = createBrowserHistory()

    // useEffect(() => {
    //   const filterParams = history.location.search.substr(1);
    //   const filtersFromParams = qs.parse(filterParams);
    //   if (filtersFromParams.courseId) {
    //     props.setCourseId(Number(filtersFromParams.courseId));
    //   }
    // }, []);
  
    // useEffect(() => {
    //   history.push(`*/?courseId=${props.courseId}`);
    // }, [props.courseId]);
    // useEffect(() => {
    //   if(props.courseId && props.currentModuleIndex && props.currentLessonIndex)
    //     window.localStorage.setItem('courseId', props.courseId);
    //     window.localStorage.setItem('currentModuleIndex', props.currentModuleIndex);
    //     window.localStorage.setItem('currentLessonIndex', props.currentLessonIndex);
    // }, [props.courseId,props.currentModuleIndex,props.currentLessonIndex]);

    // courseId, currentModuleIndex, currentLessonIndex



    // reservedCourseId={reservedCourseId}
    // setReservedCourseId={setReservedCourseId}


    let location = useLocation()
    
      useEffect(()=>{
        if(!props.courseId){
          props.setReservedCourseId(JSON.parse(window.localStorage.getItem('courseId')));
        }
      }, [])
    

  let moduleList;
  if (props.modules) {
    moduleList = props.modules.items.map((i, index) => (
      <SidebarModuleBlock
        key={i.id}
        title={i.title}
        courseId={props.courseId}
        moduleId={i.id}
        moduleIndex={index}
        getModuleId={props.getModuleId}
        lessonId={props.lessonId}
        getLessonId={props.getLessonId}
        moduleMenuToggle={props.moduleMenuToggle}
        lessonMenuToggle={props.lessonMenuToggle}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  return (
    <div className="test__wrapper-sidebar">
      {/* {list} */}
      <SidebarDataAboutTestDesctop course={props.course} />

      <ProgressCourse
        progressCourse={props.progressCoursePercent}
        // totalLessons={props.course.totalLessons}
        // checkLessons={props.course.checkLessons}
      />
      {/* {modulesList} */}
      {moduleList}
    </div>
  );
};

export default CourseSidebar;
