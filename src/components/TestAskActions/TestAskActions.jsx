import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const TestAskActions = (props) => {
  
  let [isFullEndTest, setIsFullEndTest] = useState(false);

  const getIsFellEndTest = () => {
    setIsFullEndTest(true);
  };
  if (isFullEndTest) {

    return (
      <div className="test__ask-wrapper">
        <NavLink
          to={{
            pathname: "/TestChecking",
            state: { completedResponse: props.completedResponse },
          }}
          className="test__ask-red test__ask-btn"
        >
          Смотреть результаты
        </NavLink>
      </div>
    );
  } else {
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
          <div
            className="test__ask-red test__ask-btn"
            onClick={props.localNextAsk}
          >
            Следующий вопрос
          </div>
        ) : (
          <div
            className="test__ask-red test__ask-btn"
            onClick={()=>{props.localNextAsk(); getIsFellEndTest()}}
          >
            Завершить Тест
          </div>
        )}
      </div>
    );
  }
};

export default TestAskActions;
