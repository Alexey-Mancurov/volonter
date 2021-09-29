const TestContainer = (props) => {
  return (
    <div class="test__container">
      <div class="test__container-wrapper self-start">
        <div class="test__content-title">
          Вы решили стать волонтёром в Центре паллиативной помощи. Каков первый
          этап отбора и обучения на эту позицию?
        </div>
        <div class="test__completed-result">1/10</div>
      </div>
      <div class="test__ask">
        <label class="test__ask-labelRadio">
          <input name="ask-1" type="radio" class="test__ask-inputRadio">
          </input>
          <span class="test__ask-checkboxRadio"></span>
          <span class="test__ask-textRadio">Распределение в команду </span>
        </label>
        <label class="test__ask-labelRadio">
          <input name="ask-1" type="radio" class="test__ask-inputRadio"></input>
          <span class="test__ask-checkboxRadio"></span>
          <span class="test__ask-textRadio">Стажировка</span>
        </label>
        <label class="test__ask-labelRadio">
          <input
            name="ask-1"
            type="radio"
            class="test__ask-inputRadio"
            checked
          ></input>
          <span class="test__ask-checkboxRadio"></span>
          <span class="test__ask-textRadio">Инструктаж</span>
        </label>
        <label class="test__ask-labelRadio">
          <input name="ask-1" type="radio" class="test__ask-inputRadio"></input>
          <span class="test__ask-checkboxRadio"></span>
          <span class="test__ask-textRadio">Заполнение анкеты</span>
        </label>

        <div class="test__ask-wrapper">
          <a href="#" class="test__ask-blueBorder test__ask-btn">
            Назад
          </a>
          <a href="#" class="test__ask-red test__ask-btn">
            Следующий вопрос
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestContainer;
