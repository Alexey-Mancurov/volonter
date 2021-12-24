import { useContext } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../hooks/useRequestData";
import store from "../../../store/store";
import { TContext } from "../../../types/types";
import CoureseReviewItem from "./CoureseReviewItem";
import s from "./index.module.css";

const CourseReviews = () => {
  const context: TContext = useContext(Context);

  type TReviewsList = {
    items: Array<{
      date: string;
      img: string;
      name: string;
      rating: string;
      text: string;
    }>;
    num: number;
  };
  const reviewsList: TReviewsList | undefined = useRequestData(
    // @ts-ignore
    [store.coursesAPI.coursesReviews[context.courseId]],
    [context.courseId]
  );

  if (reviewsList) {
    const list = () =>
      // @ts-ignore
      reviewsList.items.map((i, index) => (
        <CoureseReviewItem
          key={index}
          img={i.img}
          rating={i.rating}
          name={i.name}
          date={i.date}
          text={i.text}
        />
      ));

    return (
      <div className={s.container}>
        {list()}
        <div className={s.info}>
          <div className={s.infoBox}>
            <div className={s.infoItem}>
              {/* @ts-ignore */}
              Всего отзывов <span>{reviewsList.items.length}</span>
            </div>

            <div className={s.infoItem}>
              {/* @ts-ignore */}
              Записалось на курс <span>{reviewsList.num}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.container}>
        <div className={s.your}>
          <p className={s.yourText}>Отзывов на этот курс пока нет</p>
        </div>
      </div>
    );
  }
};

export default CourseReviews;
