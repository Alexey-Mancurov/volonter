const CourseInfoActionsCompleted = (props) => {
  return (
    <div className="test__info-wrapper">
        <div className="test__completed test__completed-info">
          <div className="test__info-completed-wrapper">
            <p className="test__info-completed-text">
              Вы уже выполнили этот тест успешно. Можете пройти следующий урок
            </p>
            <div
              className="test__ask-blueBorder test__info-completed-btn"
              onClick={props.nextLesson}
            >
              Далее
            </div>
          </div>
        </div>
      <div className="test__info-btnBox">
        <div
          className="test__ask-blueBorder test__info-btn"
          onClick={props.prevLesson}
        >
          Предыдущий урок
        </div>
        <div
          className="test__ask-red test__info-btn"
          onClick={props.nextLesson}
        >
          Следующий урок
        </div>
      </div>
    </div>
  );
};

export default CourseInfoActionsCompleted;
