import ContentBoxCource from "../../common/ContentBoxCource/ContentBoxCource";
import renderingStartsRating from "../../../utils/renderingStartsRating/renderingStartsRating";
import s from "./index.module.css";
import { FC } from "react";



interface TProps {
  name: string;
  date: string;
  text: string;
  rating: any|string | number;
  img: string;
};

const CoureseReviewItem: FC<TProps> = ({
  name,
  date,
  text,
  rating,
  img,
}) => {

  const starsList = renderingStartsRating(rating)

  return (
    <ContentBoxCource
      addedClass={s.item}
      child={
        <>
          <div className={s.box}>
            <img src={img} alt="" />
            <div className={s.rating}>
              {starsList}
            </div>
          </div>
          <div className={s.content}>
            <div className={s.name}>{name}</div>
            <div className={s.date}>{date}</div>
            <p className={s.text}>{text}</p>
          </div>
        </>
      }
    />
  );
};

export default CoureseReviewItem;
