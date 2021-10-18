const TestAskTitle = (props) => {

  return (
    <div className="test__ask-title-box">
      <div className="test__ask-title">Вопрос {props.num}</div>
      {props.answerCorrect===props.answerVolont ? (
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
