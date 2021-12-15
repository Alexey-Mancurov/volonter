import s from './index.module.css'

type PropsType = {
  text: string;
  addClass?: string | undefined;
};
const BorderBlueBtn: React.FC<PropsType> = ({ text, addClass }) => {
  return <div className={`${s.btn} ${addClass}`}>{text}</div>;
};

export default BorderBlueBtn;
