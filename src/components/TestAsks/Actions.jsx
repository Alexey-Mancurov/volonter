import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Actions = ({
  completedResponse,
  currentAsk,
  prevAsk,
  askCount,
  localNextAsk,
}) => {
  const [isFullEndTest, setIsFullEndTest] = useState(false);

  if (isFullEndTest) {
    return (
      <div className="test__ask-wrapper">
        <NavLink
          to={{
            pathname: "/TestChecking",
            state: { completedResponse: completedResponse },
          }}
          className="test__ask-red test__ask-btn"
        >
          Смотреть результаты
        </NavLink>
      </div>
    );
  }

  return (
    <div className="test__ask-wrapper">
      {currentAsk !== 1 && (
        <div className="test__ask-blueBorder test__ask-btn" onClick={prevAsk}>
          Назад
        </div>
      )}
      {currentAsk !== askCount && currentAsk < askCount ? (
        <div className="test__ask-red test__ask-btn" onClick={localNextAsk}>
          Следующий вопрос
        </div>
      ) : (
        <div
          className="test__ask-red test__ask-btn"
          onClick={() => {
            localNextAsk();
            setIsFullEndTest(true);
          }}
        >
          Завершить Тест
        </div>
      )}
    </div>
  );
};

export default Actions;
