import { NavLink } from "react-router-dom";

const TestResultBtn = (props) => {
  if (props.isLastLesson) {
    return (
      <NavLink
        to={{
          pathname: "/test-completed",
          state: { completedResponse: props.completedResponse },
        }}
        className="test__ask-red test__ask-btn"
      >
        Смотреть результаты
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={{
          pathname: "/test-checking",
          state: { completedResponse: props.completedResponse },
        }}
        className="test__ask-red test__ask-btn"
      >
        Смотреть результаты
      </NavLink>
    );
  }
};

export default TestResultBtn;
