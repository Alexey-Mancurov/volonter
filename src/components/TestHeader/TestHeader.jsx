const TestHeader = (props) => {
  return (
    <div class="test__container-wrapper self-start">
      <div class="test__content-title">
        Вы решили стать волонтёром в Центре паллиативной помощи. Каков первый
        этап отбора и обучения на эту позицию?
      </div>
      <div class="test__completed-result">{props.currentAsk}/{props.asksCount}</div>
    </div>
  );
};

export default TestHeader;
