import DarkStar from "../../components/common/DarkStart/DarkStart";
import GoldStar from "../../components/common/GoldStart/GoldStart";

const renderingStartsRating = (rating:number) => {
  const goldList = [];
  const darkList = [];

  for (let i = 0; i < rating; i++) {
    goldList.push(<GoldStar key={Math.random()}/>);
  }
  for (let i = 0; i < 5 - rating; i++) {
    darkList.push(<DarkStar key={Math.random()}/>);
  }

  const combineStars = [...goldList, ...darkList]
  
  return combineStars
};
export default renderingStartsRating;
