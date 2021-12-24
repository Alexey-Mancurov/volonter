import React, { useContext } from "react";
import { Route } from "react-router";
import Context from "../../context/context";
import SuspensePreloader from "../common/SuspensePreloader";
import CourseSidebar from "../CourseSidebar";
import s from "./index.module.css";
import { FC } from "react";
import { LessonPage } from "../../pages/lesson-page";
import { TestPage } from "../../pages/test-page";
import { CompletedPage } from "../../pages/completed-page";
import { CheckingPage } from "../../pages/checking-page";
const CourseInfo = React.lazy(() => import("../CourseInfo"));
const TestContainer = React.lazy(() => import("../TestContainer"));
const TestCompleted = React.lazy(() => import("../TestCompleted"));
const TestChecking = React.lazy(() => import("../TestChecking"));

interface TProps {
  title: string;
}

const TestWrapper: FC<TProps> = ({ title }) => {
  const context = useContext(Context);

  return (
    <div className={s.wrapper}>
      <CourseSidebar />
      <div className={s.wrapperBody}>
        <Route
          path={`/courseDetail/${context.courseId}/lesson`}
          children={<SuspensePreloader child={<LessonPage />} />}
        />
        <Route
          path={`/courseDetail/${context.courseId}/test`}
          children={<SuspensePreloader child={<TestPage />} />}
        />
        <Route
          path={`/courseDetail/${context.courseId}/test-completed`}
          children={
            <SuspensePreloader child={<CompletedPage title={title} />} />
          }
        />
        <Route
          path={`/courseDetail/${context.courseId}/test-checking`}
          children={<SuspensePreloader child={<CheckingPage />} />}
        />
      </div>
    </div>
  );
};

export default TestWrapper;
