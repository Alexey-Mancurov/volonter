const TestAskTitle = (props) => {
  const isTrue = true;

  return (
    <div className="test__ask-title-box">
      <div className="test__ask-title">Вопрос 1</div>
      {/* В стили добавил класс  test__ask-notif-blue*/}
      {isTrue ? (
        <div className="test__ask-notif test__ask-notif-blue">
          Правильный ответ
        </div>
      ) : (
        <div className="test__ask-notif test__ask-notif-red">
          Неправильный ответ
        </div>
      )}
    </div>
  );
};

export default TestAskTitle;
