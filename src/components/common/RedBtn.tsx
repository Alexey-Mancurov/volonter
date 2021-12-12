type PropsType = {
  text: string;
  addClass?: string;
};

const RedBtn:React.FC<PropsType> = ({ text, addClass }) => {
  return <div className={`test__ask-red ${addClass}`}>{text}</div>;
};

export default RedBtn;
