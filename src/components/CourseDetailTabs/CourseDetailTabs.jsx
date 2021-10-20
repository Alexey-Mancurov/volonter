import { useState } from "react";
import { NavLink } from "react-router-dom";
import CourseDetailTabItem from "./CourseDetailTabItem";

const CourseDetailTabs = (props) => {
  let tabsList;
  if (props.tabsData) {
    tabsList = props.tabsData.map((i, index) => (
      <CourseDetailTabItem key={index} index={index} text={i.text} path={i.path} isActive={i.isActive} getPath={props.getPath} isActiveToggle={props.isActiveToggle}/>
    ));
  }

  return (
    <ul class="tabs tabs__course">
        {tabsList}
    </ul>
  );
};

export default CourseDetailTabs;
