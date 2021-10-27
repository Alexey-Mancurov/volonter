import { useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import CoureseReviewItem from "./CoureseReviewItem";

const CourseReviews = (props) => {
  let [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    coursesAPI.coursesReviews(props.courseId).then((reviews) => {
      setReviewsList(reviews);
    });
  }, []);

  let list;
  if (reviewsList.items) {
    list = reviewsList.items.map((i, index) => (
      <CoureseReviewItem
        key={index}
        length={reviewsList.items.length}
        img={i.img}
        rating={i.rating}
        name={i.name}
        date={i.date}
        text={i.text}
      />
    ));
  }

  if (reviewsList.items) {
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
    return (
      <div className="cource__reviews">
        {list}
        <div className="cource__reviews-info">
          <div className="cource__reviews-info-box">
            {/* <div className="cource__reviews-info-item">
              Записалось на курс <span>135947</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
};

export default CourseReviews;
