const TestCompletedInfo = ({ sertificate, successAsks, totalAsk }) => {
  return (
    <div className="test__completed">
      <div className="test__completed-wrapper">
        <div className="test__completed-title">Тест завершен</div>
        <div className="test__completed-result">
          {successAsks}/{totalAsk}
        </div>
      </div>
      <div className="test__completed-text">
        Ваш результат:{" "}
        <span>
          {successAsks} балла из {totalAsk}
        </span>
      </div>
      <div className="test__completed-endActions">
        <div className="test__ask-red test__endActions-btn">Готово</div>
        <a
          href={sertificate}
          className="test__ask-blue  test__endActions-btn"
          download
        >
          Скачать сертификат
        </a>
      </div>
    </div>
  );
};

export default TestCompletedInfo;
