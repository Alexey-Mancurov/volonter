import { useContext } from "react";
import { NavLink } from "react-router-dom";
import TestContext from "../../context/testContext";

const CourseInfoActions = ({
  lesson,
  isChecked,
}) => {
  const testContext = useContext(TestContext);

  let testList;
  if (lesson.item) {
    console.log(lesson)
    testList = lesson.item.idListTests.map((i, index) => (
      <NavLink
        key={index}
        to={{
          pathname: "/test",
          state: {
            isLastLesson: testContext.isLastLesson,
            isLastModule: testContext.isLastModule,
            idTest: i,
          },
        }}
        className="test__ask-blueBorder test__info-completed-btn"
      >
        Пройти тест
      </NavLink>
    ));
  }

  return (
    <div className="test__info-wrapper">
      <div className="test__completed test__completed-info">
        {!isChecked && (
          <div className="test__info-completed-title">
            Проверка полученных знаний
          </div>
        )}

        <div className="test__info-completed-wrapper">
          {!isChecked ? (
            <>
              <p className="test__info-completed-text">
                Пройдите тест, чтобы закрепить полученные знания
              </p>
              <div>{testList}</div>
            </>
          ) : (
            <>
              <p className="test__info-completed-text">
                Вы уже выполнили этот тест успешно. Можете пройти следующий урок
              </p>
              <div
                className="test__ask-blueBorder test__info-completed-btn"
                onClick={testContext.nextLesson}
              >
                Далее
              </div>
            </>
          )}
        </div>
      </div>
      <div className="test__info-btnBox">
        <div
          className="test__ask-blueBorder test__info-btn"
          onClick={testContext.prevLesson}
        >
          Предыдущий урок
        </div>
        <div
          className="test__ask-red test__info-btn"
          onClick={testContext.nextLesson}
        >
          Следующий урок
        </div>
      </div>
    </div>
  );
};

export default CourseInfoActions;
