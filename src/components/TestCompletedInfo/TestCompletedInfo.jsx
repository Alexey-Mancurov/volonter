const TestCompletedInfo = (props) => {
  return (
    <div className="test__completed">
      <div className="test__completed-wrapper">
        <div className="test__completed-title">Тест завершен</div>
        <div className="test__completed-result">10/10</div>
      </div>
      <div className="test__completed-text">
        Ваш результат: <span>10 баллов из 10</span>
      </div>
      <div className="test__completed-endActions">
        <a href="#" className="test__ask-red test__endActions-btn">
          Готово
        </a>
        <a href="#" className="test__ask-blue  test__endActions-btn">
          Скачать сертификат
        </a>
      </div>
    </div>
  );
};

export default TestCompletedInfo;
