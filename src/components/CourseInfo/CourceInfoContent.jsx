import ContentList from "../common/ContentList";

const CourceInfoContent = (props) => {
  if(!props.description){
    return  <div class="test__info-content">
    <div class="test__info-content-box">
      <p class="test__info-briefly">
        ОШИБКА описания
      </p>
      <ContentList info={props.info}/>
    </div>
  </div>
  }
  return (
    <div class="test__info-content">
      <div class="test__info-content-box">
        <p class="test__info-briefly">
          {props.description}
        </p>
        <ContentList info={props.info}/>
      </div>
      <div class="test__info-data-box">
        <p class="test__info-subtitle">Желаем интересного просмотра</p>
        <div class="test__info-data">
          <div class="test__data-box">
            <img class="test__data-img" src="img/course/icons/paper.svg" alt=""></img>
          </div>
          <div class="test__data-container">
            <div class="test__data-text">Основные типы рисков</div>
            <a href={props.linkVideo} class="test__data-link" target="_blank">
              Смотреть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceInfoContent;
