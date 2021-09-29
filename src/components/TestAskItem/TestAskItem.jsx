const TestAskItem = (props) => {
  return (
    <label class="test__ask-labelRadio">
      <input name="ask-1" type="radio" class="test__ask-inputRadio"></input>
      <span class="test__ask-checkboxRadio"></span>
      <span class="test__ask-textRadio">{props.title}</span>
    </label>
  );
};

export default TestAskItem;
