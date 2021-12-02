import React from "react";
import { Route } from "react-router";
import SuspensePreloader from "./common/SuspensePreloader";
import CourseSidebar from "./CourseSidebar/CourseSidebar";
const CourseInfo = React.lazy(() => import("./CourseInfo/CourseInfo"));
const TestContainer = React.lazy(() => import("./TestContainer/TestContainer"));
const TestCompleted = React.lazy(() => import("./TestCompleted/TestCompleted"));
const TestChecking = React.lazy(() => import("./TestChecking/TestChecking"));

const TestWrapper = (props) => {
  return (
    <div className="test__wrapper">
      <CourseSidebar />
      <div className="test__wrapper-body">
        <Route
          path={"/lesson"}
          children={<SuspensePreloader child={<CourseInfo />} />}
        />
        <Route
          path={"/test"}
          children={<SuspensePreloader child={<TestContainer />} />}
        />
        <Route
          path={"/test-completed"}
          children={
            <SuspensePreloader child={<TestCompleted title={props.title} />} />
          }
        />
        <Route
          path={"/test-checking"}
          children={<SuspensePreloader child={<TestChecking />} />}
        />
      </div>
    </div>
  );
};

export default TestWrapper;
