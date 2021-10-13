const TestCompletedInfo = (props) => {
  return (
    <div className="test__completed">
      <div className="test__completed-wrapper">
        <div className="test__completed-title">Тест завершен</div>
        <div className="test__completed-result">{props.successAsks}/{props.totalAsk}</div>
      </div>
      <div className="test__completed-text">
        Ваш результат: <span>{props.successAsks} балла из {props.totalAsk}</span>
      </div>
      <div className="test__completed-endActions">
        <a href="#" className="test__ask-red test__endActions-btn">
          Готово
        </a>
        <a href={props.sertificate} className="test__ask-blue  test__endActions-btn" download>
          Скачать сертификат
        </a>
      </div>
    </div>
  );
};

export default TestCompletedInfo;
