const BlueBtn = (props) => {
  return (
    <a href="#" className={`test__ask-blue ${props.addClass}`}>
      {props.text}
    </a>
  );
};

export default BlueBtn;
