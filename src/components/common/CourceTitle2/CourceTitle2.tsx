import s from './index.module.css'

type PropsType = {
  title: string;
};
const CourceTitle2:React.FC<PropsType> = ({ title }) => {
  return <p className={s.title}>{title}</p>;
};

export default CourceTitle2;
