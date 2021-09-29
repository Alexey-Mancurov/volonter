import CourseInfo from "../CourseInfo";
import CourseInfoActions from "../CourseInfoActions";

const CoursePreview = (props) => {
  return (
    <>
      <CourseInfo />
      <CourseInfoActions
        currentLesson={props.currentLesson}
        nextLesson={props.nextLesson}
        prevLesson={props.prevLesson}
        getActiveTest={props.getActiveTest}
      />
    </>
  );
};

export default CoursePreview;
