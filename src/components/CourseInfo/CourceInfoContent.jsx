const CourceInfoContent = (props) => {
  return (
    <div class="test__info-content">
      <div class="test__info-content-box">
        <p class="test__info-briefly">
          Мы поговорили о координации, мотивации и обеспечении комфорта
          волонтёров во время события. В этом уроке расмотрим:
        </p>
        <ul class="cource__content-list ">
          <li class="course__list-item test__list-item">
            Основные типы рисков, с которыми организаторы могут столкнуться на
            событии
          </li>
          <li class="course__list-item test__list-item">
            Как избежать их возникновения
          </li>
          <li class="course__list-item test__list-item">
            Что делать, если возник риск
          </li>
        </ul>
      </div>

      <div class="test__info-data-box">
        <p class="test__info-subtitle">Желаем интересного просмотра</p>
        <div class="test__info-data">
          <div class="test__data-box">
            <img class="test__data-img" src="img/course/icons/paper.svg" alt=""></img>
          </div>
          <div class="test__data-container">
            <div class="test__data-text">Основные типы рисков</div>
            <a href="" class="test__data-link">
              Смотреть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceInfoContent;
