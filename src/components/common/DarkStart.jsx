import start_dark from "../../assets/star-dark.svg";


const DarkStar = (props) => {
  if (props.getDarkStarList) {
    return (
      <svg
        class={`cource__reviews-star ${props.isGold ? "gold" : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => props.getDarkStarList(props.index)}
      >
        <path
          d="M17.37.23l4.054 12.48h13.123l-10.616 7.714 4.055 12.48-10.617-7.713-10.616 7.713 4.055-12.48L.192 12.711h13.122L17.37.23z"
          fill="#A0A0A0"
          
        />
      </svg>
    );
  } else {
    return <img src={start_dark} alt="" class="cource__reviews-star" />;
  }
};

export default DarkStar;
