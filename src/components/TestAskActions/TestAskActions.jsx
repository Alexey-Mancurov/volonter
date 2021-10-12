import React from "react";
import { NavLink } from "react-router-dom";

const TestAskActions = (props) => {

  return (
    <div className="test__ask-wrapper">
      {props.currentAsk !== 1 ? (
        <div
          className="test__ask-blueBorder test__ask-btn"
          onClick={props.prevAsk}
        >
          Назад
        </div>
      ) : (
        ""
      )}
      {props.currentAsk !== props.askCount &&
      props.currentAsk < props.askCount ? (
      <div className="test__ask-red test__ask-btn" onClick={props.localNextAsk}>
        Следующий вопрос
      </div>
      ) : (
      // <NavLink
      //   to={"/test-completed"}
      //   // to={"/test"}
      //   className="test__ask-red test__ask-btn"
      //   onClick={props.localEndTest}
      //   // onClick={props.localNextAsk}
      // >
      //   Завершить Тест
      // </NavLink>
      <div
        // to={"/test-completed"}
        // to={"/test"}
        className="test__ask-red test__ask-btn"
        onClick={props.localEndTest}
        // onClick={props.localNextAsk}
      >
        Завершить Тест
      </div>
      )}
    </div>
  );
};

export default TestAskActions;
