const RedBtn = (props) => {
  return (
    <a href="#" className={`test__ask-red ${props.addClass}`}>
      {props.text}
    </a>
  );
};

export default RedBtn;
