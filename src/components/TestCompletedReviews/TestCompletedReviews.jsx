import { useRef, useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import check from "../../assets/check.svg";
import DarkStar from "../common/DarkStart";
import GoldStar from "../common/GoldStart";

const TestCompletedReviews = (props) => {
  let [darkStarList, setDarkStarList] = useState([
    { rating: 1, isGold: false },
    { rating: 2, isGold: false },
    { rating: 3, isGold: false },
    { rating: 4, isGold: false },
    { rating: 5, isGold: false },
  ]);

  const getDarkStarList = (index) => {
    setDarkStarList(
      darkStarList.map((i, ind) => {
        if (ind === index) {
          return { ...i, isGold: true };
        }
        if (ind !== index) {
          return i;
        }
      })
    );
    let nums = darkStarList.filter(gold=>gold.isGold===true);
    setStarsNum(nums.length+1)
  };

  let [allStarsList, setAllStartList] = useState();

  useEffect(() => {
    if (darkStarList) {
      setAllStartList(
        darkStarList.map((i, index) => (
          <DarkStar
            rating={i.rating}
            isGold={i.isGold}
            getDarkStarList={getDarkStarList}
            index={index}
          />
        ))
      );
    }
  }, [darkStarList]);

  let [reviewValue, setReviewValue] = useState("");

  const getReviewValue = (e) => {
    setReviewValue(e.target.value);
  };

  let [starsNums, setStarsNum] = useState(0);

  let [isTextareaDisabled, setIsTextareaDisabled]=useState(false)

  const sendReview = () => {
    coursesAPI.coursesReviewAdded(props.courseId, starsNums, reviewValue).then(response=>{
      console.log(response)
    })
    setReviewValue('Отзыв Принят')
    setIsTextareaDisabled(isTextareaDisabled=true)
  };

  return (
    <div className="test__completed">
      <div className="test__completed-wrapper test__wrapper-review">
        <div className="test__completed-title">Оставить отзыв</div>
        <div className="test__completed-review">
          <div className="test__completed-rating">{allStarsList}</div>
          <button className="test__sidebar-block-check test__sidebar-block-check-completed" onClick={sendReview} disabled={isTextareaDisabled}>
            <img src={check} alt=""></img>
          </button>
        </div>
      </div>
      <textarea
        className="test__completed-textarea"
        placeholder="Текст"
        value={reviewValue}
        onChange={getReviewValue}
        disabled={isTextareaDisabled}
      ></textarea>
    </div>
  );
};

export default TestCompletedReviews;
