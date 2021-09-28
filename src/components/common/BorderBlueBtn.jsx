const BorderBlueBtn = (props) => {
  return (
    <a href="#" className={`test__ask-blueBorder ${props.addClass}`}>
      {props.text}
    </a>
  );
};

export default BorderBlueBtn;
