const RedBtn = (props) => {
  return (
    <div className={`test__ask-red ${props.addClass}`}>
      {props.text}
    </div>
  );
};

export default RedBtn;
