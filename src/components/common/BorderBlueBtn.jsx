const BorderBlueBtn = (props) => {
  return (
    <div className={`test__ask-blueBorder ${props.addClass}`}>
      {props.text}
    </div>
  );
};

export default BorderBlueBtn;
