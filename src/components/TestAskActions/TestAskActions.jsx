const TestAskActions = (props) => {
    debugger
  return (
    <div class="test__ask-wrapper">
      {props.currentAsk !== 1 ? (
        <div class="test__ask-blueBorder test__ask-btn" onClick={props.prevAsk}>
          Назад
        </div>
      ) : (
        ""
      )}
    {props.currentAsk !== props.asksCount ?
    <div class="test__ask-red test__ask-btn" onClick={props.nextAsk}>
        Следующий вопрос
      </div>
      : <div class="test__ask-red test__ask-btn" onClick={props.nextAsk}>
      Завершить Тест
    </div>
    }
      
    </div>
  );
};

export default TestAskActions;
