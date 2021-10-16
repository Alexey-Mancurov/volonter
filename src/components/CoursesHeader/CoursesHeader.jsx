const CoursesListHeader = (props) => {
  return (
    <div class="cource__tab-wrapper">
      <ul class="tabs tabs__course">
        <li class="tabs__item ">
          <div class="tabs__link tabs__course-link">Все курсы</div>
        </li>
        <li class="tabs__item">
          <div class="tabs__link tabs__course-link active">Избранные</div>
        </li>
        <li class="tabs__item">
          <div class="tabs__link tabs__course-link">Пройденные</div>
        </li>
      </ul>
      <div class="cource__level">
        <div class="cource__level-item cource__level-current">Базовый</div>
        <div class="cource__level-item">Продвинутый</div>
      </div>
    </div>
  );
};

export default CoursesListHeader;
