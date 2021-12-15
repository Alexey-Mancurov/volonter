import s from './index.module.css'

type PropsType = {
  num?: string | number;
};
const NumInCircle:React.FC<PropsType> = ({ num }) => {
  return <div className={s.num}>{num}</div>;
};

export default NumInCircle;
