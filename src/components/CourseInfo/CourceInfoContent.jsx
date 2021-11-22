import paper from "../../assets/paper.svg";
import ListContent from "../common/ListContent/ListContent";

const CourceInfoContent = ({ title, description, info, linkVideo }) => {

  return (
    <div className="test__info-content">
      <div className="test__info-content-box">
        {description && <p className="test__info-briefly">{description}</p>}
        <ListContent list={info}/>
      </div>
      <div className="test__info-data-box">
        <p className="test__info-subtitle">Желаем интересного просмотра</p>
        <div className="test__info-data">
          <div className="test__data-box">
            <img className="test__data-img" src={paper} alt=""></img>
          </div>
          <div className="test__data-container">
            <div className="test__data-text">{title}</div>
            <a
              href={linkVideo}
              className="test__data-link"
              target="_blank"
              rel="noreferrer"
            >
              Смотреть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceInfoContent;
