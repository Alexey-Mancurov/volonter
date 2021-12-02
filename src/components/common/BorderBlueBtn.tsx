type PropsType = {
  text: string;
  addClass: string;
};
const BorderBlueBtn: React.FC<PropsType> = ({ text, addClass }) => {
  return <div className={`test__ask-blueBorder ${addClass}`}>{text}</div>;
};

export default BorderBlueBtn;
