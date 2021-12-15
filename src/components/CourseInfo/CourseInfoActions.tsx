import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import TestContext from "../../context/testContext";
import s from "./index.module.css";

type TProps = {
  idListTests: Array<string>;
  isChecked: boolean;
};

const CourseInfoActions: React.FC<TProps> = ({ idListTests, isChecked }) => {
  const context = useContext(Context);
  const testContext = useContext(TestContext);

  let testList;
  if (idListTests) {
    //@ts-ignore
    testList = idListTests.map((i, index) => (
      <NavLink
        key={index}
        to={{
          pathname: `/courseDetail/${context.courseId}/test`,
          state: {
            isLastLesson: testContext.isLastLesson,
            isLastModule: testContext.isLastModule,
            idTest: i,
          },
        }}
        className={s.testBtn}
      >
        Пройти тест
      </NavLink>
    ));
  }

  return (
    <div className={s.wrapper}>
      <div className={s.testCompleted}>
        {!isChecked && (
          <div className={s.completedTitle}>Проверка полученных знаний</div>
        )}

        <div className={s.completedWrapper}>
          {!isChecked ? (
            <>
              <p className={s.completedText}>
                Пройдите тест, чтобы закрепить полученные знания
              </p>
              <div>{testList}</div>
            </>
          ) : (
            <>
              <p className={s.completedText}>
                Вы уже выполнили этот тест успешно. Можете пройти следующий урок
              </p>
              <div
                className={s.btn}
                onClick={testContext.nextLesson}
              >
                Далее
              </div>
            </>
          )}
        </div>
      </div>
      <div className={s.btnBox}>
        <div
          className={s.btnInfo}
          onClick={testContext.prevLesson}
        >
          Предыдущий урок
        </div>
        <div
          className={s.btnInfo}
          onClick={testContext.nextLesson}
        >
          Следующий урок
        </div>
      </div>
    </div>
  );
};

export default CourseInfoActions;
