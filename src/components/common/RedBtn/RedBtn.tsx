import s from './index.module.css'

type PropsType = {
  text: string;
  addClass?: string;
};

const RedBtn:React.FC<PropsType> = ({ text, addClass }) => {
  return <div className={`${s.btn} ${addClass}`}>{text}</div>;
};

export default RedBtn;
