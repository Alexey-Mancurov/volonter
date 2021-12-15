import s from "./index.module.css";

type TProps = {
  ask: string;
  currentAsk: number | string;
  askCount: number | string;
};

const Header:React.FC<TProps> = ({ ask, currentAsk, askCount }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{ask}</div>
      <div className={s.result}>
        {currentAsk}/{askCount}
      </div>
    </div>
  );
};

export default Header;
