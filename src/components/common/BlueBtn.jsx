const BlueBtn = (props) => {
  return (
    <div className={`test__ask-blue ${props.addClass}`}>
      {props.text}
    </div>
  );
};

export default BlueBtn;
