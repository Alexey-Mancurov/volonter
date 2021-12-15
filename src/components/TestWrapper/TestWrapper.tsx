import React, { useContext } from "react";
import { Route } from "react-router";
import Context from "../../context/context";
import SuspensePreloader from "../common/SuspensePreloader";
import CourseSidebar from "../CourseSidebar";
import s from "./index.module.css";
const CourseInfo = React.lazy(() => import("../CourseInfo"));
const TestContainer = React.lazy(() => import("../TestContainer"));
const TestCompleted = React.lazy(() => import("../TestCompleted"));
const TestChecking = React.lazy(() => import("../TestChecking"));

type TProps = {
  title: string;
};

const TestWrapper: React.FC<TProps> = ({ title }) => {
  const context = useContext(Context);

  return (
    <div className={s.wrapper}>
      <CourseSidebar />
      <div className={s.wrapperBody}>
        <Route
          path={`/courseDetail/${context.courseId}/lesson`}
          children={<SuspensePreloader child={<CourseInfo />} />}
        />
        <Route
          path={`/courseDetail/${context.courseId}/test`}
          children={<SuspensePreloader child={<TestContainer />} />}
        />
        <Route
          path={`/courseDetail/${context.courseId}/test-completed`}
          children={
            <SuspensePreloader child={<TestCompleted title={title} />} />
          }
        />
        <Route
          path={`/courseDetail/${context.courseId}/test-checking`}
          children={<SuspensePreloader child={<TestChecking />} />}
        />
      </div>
    </div>
  );
};

export default TestWrapper;
