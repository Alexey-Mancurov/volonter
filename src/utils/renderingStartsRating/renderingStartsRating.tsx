import DarkStar from "../../components/common/DarkStart";
import GoldStar from "../../components/common/GoldStart";

const renderingStartsRating = (rating:number) => {
  const goldList = [];
  const darkList = [];

  for (let i = 0; i < rating; i++) {
    goldList.push(<GoldStar />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    darkList.push(<DarkStar />);
  }

  const combineStars = [...goldList, ...darkList]
  
  return combineStars
};
export default renderingStartsRating;
