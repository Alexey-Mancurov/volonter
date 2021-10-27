import start_dark from "../../assets/star-dark.svg";

const DarkStar = (props) => {
  if (props.getDarkStarList) {
    return (
      <svg
        class={`cource__reviews-star ${props.isGold ? "gold" : ""}`}
        width="34"
        height="33"
        viewBox="0 0 34 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => props.getDarkStarList(props.index)}
      >
        <path
          d="M17 25.959L27.506 32.3L24.718 20.349L34 12.308L21.777 11.271L17 0L12.223 11.271L0 12.308L9.282 20.349L6.494 32.3L17 25.959Z"
          fill="#A0A0A0"
        />
      </svg>
    );
  } else {
    return <img src={start_dark} alt="" className="cource__reviews-star" />;
  }
};

export default DarkStar;
