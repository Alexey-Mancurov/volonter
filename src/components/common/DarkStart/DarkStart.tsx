import star_dark from "../../../assets/star-dark.svg";
import s from './index.module.css'


type PropsType = {
  index?: number;
  isGold?: boolean;
  action?: (index: number|undefined) => void;
};
const DarkStar: React.FC<PropsType> = ({ index, isGold, action }) => {
  if (action) {
    return (
      <svg
        className={`${s.star} ${isGold ? s.gold : ""}`}
        width="34"
        height="33"
        viewBox="0 0 34 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => action(index)}
      >
        <path
          d="M17 25.959L27.506 32.3L24.718 20.349L34 12.308L21.777 11.271L17 0L12.223 11.271L0 12.308L9.282 20.349L6.494 32.3L17 25.959Z"
          fill="#A0A0A0"
        />
      </svg>
    );
  } else {
    return <img src={star_dark} alt="" className="cource__reviews-star" />;
  }
};

export default DarkStar;
