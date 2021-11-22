import { NavLink } from "react-router-dom";
import TestCompletedInfo from "../TestCompletedInfo/TestCompletedInfo";
import TestCompletedReviews from "../TestCompletedReviews/TestCompletedReviews";
import { useLocation } from "react-router";

const TestCompleted = (props) => {
  const location = useLocation();

  const completedResponse = location.state.completedResponse;

  return (
    <>
      <div className="test__container-wrapper test__wrapper-completed">
        <TestCompletedInfo
          sertificate={completedResponse.sertificate}
          successAsks={completedResponse.successAsks}
          totalAsk={completedResponse.totalAsk}
        />
        <TestCompletedReviews />
      </div>
      <div className="test__content">
        <div className="test__content-title">
          {completedResponse.content} {props.title}
        </div>
        <div className="test__container-text">
          Самое время применить полученные знания на практике
        </div>
        <div className="test__container-text">
          Выбирайте близкие вам по духу и интересам мероприятия и становитесь
          частью команды добра
        </div>
        <NavLink
          to={{
            pathname: "/test-checking",
            state: { completedResponse: completedResponse },
          }}
          className="test__ask-blueBorder test__content-btn"
        >
          Подробнее
        </NavLink>
      </div>
    </>
  );
};

export default TestCompleted;
