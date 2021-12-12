import GoldStar from "../../common/GoldStart";
import DarkStar from "../../common/DarkStart";
import ContentBoxCource from "../../common/ContentBoxCource";
import renderingStartsRating from "../../../utils/renderingStartsRating/renderingStartsRating";

type TProps = {
  name: string;
  date: string;
  text: string;
  rating: any|string | number;
  img: string;
};

const CoureseReviewItem: React.FC<TProps> = ({
  name,
  date,
  text,
  rating,
  img,
}) => {

  const starsList = renderingStartsRating(rating)

  return (
    <ContentBoxCource
      addedClass={"cource__reviews-item"}
      child={
        <>
          <div className="cource__reviews-box">
            <img src={img} alt="" />
            <div className="cource__reviews-rating">
              {starsList}
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
