import { Route } from "react-router";
import CourseInfo from "./CourseInfo/CourseInfo";
import CourseSidebar from "./CourseSidebar/CourseSidebar";
import TestChecking from "./TestChecking/TestChecking";
import TestCompleted from "./TestCompleted/TestCompleted";
import TestContainer from "./TestContainer/TestContainer";

const TestWrapper = (props) => {
  return (
    <div className="test__wrapper">
      <CourseSidebar
        progressCoursePercent={progressCoursePercent}
        lessonId={idCurrentLesson}
        moduleMenuToggle={moduleMenuToggle}
        lessonMenuToggle={lessonMenuToggle}
      />
      <div className="test__wrapper-body">
        <Route path={"/lesson"}>
          <CourseInfo
            nextLesson={nextLesson}
            prevLesson={prevLesson}
            isLastLesson={isLastLesson}
            isLastModule={isLastModule}
            idCurrentLesson={idCurrentLesson}
            idCurrentModule={idCurrentModule}
          />
        </Route>
        <Route path={"/test"}>
          <TestContainer />
        </Route>
        <Route path={"/test-completed"}>
          <TestCompleted title={course.course.title} />
        </Route>
        <Route path={"/test-checking"}>
          <TestChecking nextLesson={nextLesson} />
        </Route>
      </div>
    </div>
  );
};

export default TestWrapper;
