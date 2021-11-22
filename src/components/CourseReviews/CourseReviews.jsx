import { useContext, useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import Context from "../../context/context";
import CoureseReviewItem from "./CoureseReviewItem";

const CourseReviews = () => {
  const context = useContext(Context);

  const [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    coursesAPI.coursesReviews(context.courseId).then((reviews) => {
      setReviewsList(reviews);
    });
  }, [context.courseId]);

  let list;
  if (reviewsList.items) {
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
                Всего отзывов <span>{reviewsList.items.length}</span>
              </div>
            </div>
            <div className="cource__reviews-info-item">
              Записалось на курс <span>{reviewsList.num}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="cource__reviews">
      <div className="your__courses">
        <p className="your__courses-text">
          Отзывов на этот курс пока нет
        </p>
      </div>
    </div>;
  }
};

export default CourseReviews;
