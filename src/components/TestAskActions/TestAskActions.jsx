import React from "react";
import { NavLink } from "react-router-dom";

const TestAskActions = (props) => {
  return (
    <div class="test__ask-wrapper">
      {props.currentAsk !== 1 ? (
        <div class="test__ask-blueBorder test__ask-btn" onClick={props.prevAsk}>
          Назад
        </div>
      ) : (
        ""
      )}
      {props.currentAsk !== props.asksCount &&
      props.currentAsk < props.asksCount ? (
        <div class="test__ask-red test__ask-btn" onClick={props.nextAsk}>
          Следующий вопрос
        </div>
      ) : (
        <NavLink to={'/test-completed'} class="test__ask-red test__ask-btn" onClick={props.nextAsk}>
          Завершить Тест
        </NavLink>
      )}
    </div>
  );
};

export default TestAskActions;
