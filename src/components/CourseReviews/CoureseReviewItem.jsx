import GoldStar from "../common/GoldStart";
import DarkStar from "../common/DarkStart";
import ContentBoxCource from "../common/ContentBoxCource";

const CoureseReviewItem = ({name, date, text, rating, img}) => {
  const goldList = [];
  const darkList = [];

  for (let i = 0; i < rating; i++) {
    goldList.push(<GoldStar />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    darkList.push(<DarkStar />);
  }

  return (
    <ContentBoxCource
      addedClass={"cource__reviews-item"}
      child={
        <>
          <div className="cource__reviews-box">
            <img src={img} alt="" />
            <div className="cource__reviews-rating">
              {goldList}
              {darkList}
            </div>
          </div>
          <div className="cource__reviews-content">
            <div className="cource__reviews-name">{name}</div>
            <div className="cource__reviews-date">{date}</div>
            <p className="cource__reviews-text">{text}</p>
          </div>
        </>
      }
    />
  );
};

export default CoureseReviewItem;
