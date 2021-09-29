import { NavLink } from "react-router-dom";

const CourseInfoActions = (props) => {
  return (
    <div class="test__info-wrapper">
      <div class="test__completed test__completed-info">
        <div class="test__info-completed-title">Проверка полученных знаний</div>
        <div class="test__info-completed-wrapper">
          <p class="test__info-completed-text">
            Пройдите тест, чтобы закрепить полученные знания
          </p>
          <NavLink to={'/test'} class="test__ask-blueBorder test__info-completed-btn">
            Пройти тест
          </NavLink>
        </div>
      </div>
      <div class="test__info-btnBox">
        <div class="test__ask-blueBorder test__info-btn" onClick={props.prevLesson}>
          Предыдущий урок
        </div>
        <div class="test__ask-red test__info-btn" onClick={props.nextLesson}>
          Следующий урок
        </div>
      </div>
    </div>
  );
};

export default CourseInfoActions;
