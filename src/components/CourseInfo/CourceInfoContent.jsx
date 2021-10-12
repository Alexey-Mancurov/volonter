import ContentList from "../common/ContentList";

const CourceInfoContent = (props) => {
  if(!props.description){
    return  <div className="test__info-content">
    <div className="test__info-content-box">
      <p className="test__info-briefly">
        ОШИБКА описания
      </p>
      <ContentList info={props.info}/>
    </div>
  </div>
  }
  return (
    <div className="test__info-content">
      <div className="test__info-content-box">
        <p className="test__info-briefly">
          {props.description}
        </p>
        <ContentList info={props.info}/>
      </div>
      <div className="test__info-data-box">
        <p className="test__info-subtitle">Желаем интересного просмотра</p>
        <div className="test__info-data">
          <div className="test__data-box">
            <img className="test__data-img" src="img/course/icons/paper.svg" alt=""></img>
          </div>
          <div className="test__data-container">
            <div className="test__data-text">Основные типы рисков</div>
            <a href={props.linkVideo} className="test__data-link" target="_blank">
              Смотреть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceInfoContent;
