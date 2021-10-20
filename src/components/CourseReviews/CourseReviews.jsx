import { useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import CoureseReviewItem from "./CoureseReviewItem";

const CourseReviews = (props) => {
  debugger;

  let [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    coursesAPI.coursesReviews(props.courseId).then((reviews) => {
      setReviewsList(reviews);
    });
    console.log(reviewsList);
  }, []);

  let list;
  if (reviewsList.items) {
    console.log(list);
    list = reviewsList.items.map((i) => (
      <CoureseReviewItem
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
      <div class="cource__reviews">
        {list}
        <div class="cource__reviews-info">
          <div class="cource__reviews-info-box">
            <div class="cource__reviews-info-item">
              <div class="cource__reviews-info-item">
                Всего отзывов <span>{reviewsList.items.length}</span>
              </div>
            </div>
            <div class="cource__reviews-info-item">
              Записалось на курс <span>135947</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else{
    return (
      <div class="cource__reviews">
        {list}
        <div class="cource__reviews-info">
          <div class="cource__reviews-info-box">
            
            <div class="cource__reviews-info-item">
              Записалось на курс <span>135947</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default CourseReviews;
