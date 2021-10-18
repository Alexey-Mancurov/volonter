import { useState } from "react";

const CoursesHeaderItem = (props) => {

  const filter =()=>{
      if(props.action==='allCourses'){
        props.allCourses()
      }
      else if(props.action==='filterFavorits'){
        props.filterFavorits()
      }
      else if(props.action==='filterCompleted'){
        props.filterCompleted()
      }
  }

  return (
    <li class="tabs__item ">
      <div
        className={`tabs__link tabs__course-link ${props.isActiveFilter ? 'active' : ''}`}
        onClick={() => {props.isActiveToggle(props.index); filter()}}
      >
        {props.text}
      </div>
    </li>
  );
};

export default CoursesHeaderItem;
