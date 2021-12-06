import { useContext } from "react";
import Context from "../../context/context";
import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import { TContext } from "../../types/types";
import CoureseReviewItem from "./CoureseReviewItem";

const CourseReviews = () => {
  const context: TContext = useContext(Context);

  type TReviewsList = {
    items: Array<{
      date: string;
      img: string;
      name: string;
      rating: string;
      text: string;
    }>
    num: number;
  };
  const reviewsList: TReviewsList | undefined = useRequestData(
    // @ts-ignore
    [store.coursesAPI.coursesReviews[context.courseId]],
    [context.courseId]
  );
  console.log(reviewsList);

  let list: Array<any>;
  if (reviewsList) {
    // @ts-ignore
    list = reviewsList.items.map((i, index) => (
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
      <div className="cource__reviews">
        {list}
        <div className="cource__reviews-info">
          <div className="cource__reviews-info-box">
            <div className="cource__reviews-info-item">
              <div className="cource__reviews-info-item">
                {/* @ts-ignore */}
                Всего отзывов <span>{reviewsList.items.length}</span>
              </div>
            </div>
            <div className="cource__reviews-info-item">
                {/* @ts-ignore */}
              Записалось на курс <span>{reviewsList.num}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cource__reviews">
        <div className="your__courses">
          <p className="your__courses-text">Отзывов на этот курс пока нет</p>
        </div>
      </div>
    );
  }
};

export default CourseReviews;
