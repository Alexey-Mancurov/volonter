import CourseInfo from "../CourseInfo";
import TestBody from "../TestBody/CourseBody";
import TestSidebar from "../TestSidebar/TestSidebar";

const Course = (props) => {
  return (
    <div className={`test__wrapper ${props.addedClassForWrapper}`}>
      <TestSidebar />
      <TestBody currentLesson={props.currentLesson} nextLesson={props.nextLesson} prevLesson={props.prevLesson} isActiveTest={props.isActiveTest} getActiveTest={props.getActiveTest}/>
    </div>
  );
};

export default Course;
