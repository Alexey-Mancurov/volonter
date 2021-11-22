import { NavLink } from "react-router-dom";

const TestResultBtnLastTest = ({ completedResponse }) => {
  return (
    <NavLink
      to={{
        pathname: "/test-completed",
        state: { completedResponse: completedResponse },
      }}
      className="test__ask-red test__ask-btn"
    >
      Смотреть результаты
    </NavLink>
  );
};

export default TestResultBtnLastTest;
