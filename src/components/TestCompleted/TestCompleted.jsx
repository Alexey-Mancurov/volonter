import { NavLink } from "react-router-dom";
import Info from "./Info";
import Reviews from "./Reviews";
import { useLocation } from "react-router";

const TestCompleted = (props) => {
  const location = useLocation();

  const completedResponse = location.state.completedResponse;

  return (
    <>
      <div className="test__container-wrapper test__wrapper-completed">
        <Info
          sertificate={completedResponse.sertificate}
          successAsks={completedResponse.successAsks}
          totalAsk={completedResponse.totalAsk}
        />
        <Reviews />
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
