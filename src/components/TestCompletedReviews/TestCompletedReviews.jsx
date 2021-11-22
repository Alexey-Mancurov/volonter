import { useContext, useState } from "react";
import { useEffect } from "react";
import { coursesAPI } from "../../api/api";
import check from "../../assets/check.svg";
import Context from "../../context/context";
import DarkStar from "../common/DarkStart";

const TestCompletedReviews = () => {

  const context = useContext(Context)

  const [darkStarList, setDarkStarList] = useState([
    { rating: 1, isGold: false },
    { rating: 2, isGold: false },
    { rating: 3, isGold: false },
    { rating: 4, isGold: false },
    { rating: 5, isGold: false },
  ]);

  const [starsNums, setStarsNum] = useState(0);

  const getDarkStarList = (index) => {
    setDarkStarList(
      darkStarList.map((i, ind) => {
        if (ind === index) {
          return { ...i, isGold: true };
        }

        return i;
      })
    );
    const nums = darkStarList.filter((gold) => gold.isGold);
    setStarsNum(nums.length + 1);
  };

  const [allStarsList, setAllStartList] = useState();

  useEffect(() => {
    if (darkStarList) {
      setAllStartList(
        darkStarList.map((i, index) => (
          <DarkStar
            key={index}
            isGold={i.isGold}
            action={getDarkStarList}
            index={index}
          />
        ))
      );
    }
  }, [darkStarList]);

  const [reviewValue, setReviewValue] = useState("");

  const getReviewValue = (e) => {
    setReviewValue(e.target.value);
  };

  const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);

  const sendReview = () => {
    coursesAPI
      .coursesReviewAdded(context.courseId, starsNums, reviewValue)
      .then((response) => {
        if (response.success) {
          setReviewValue("Отзыв Принят");
          setIsTextareaDisabled((isTextareaDisabled = true));
        } else {
          console.log("Ошибка");
        }
      });
  };

  return (
    <div className="test__completed">
      <div className="test__completed-wrapper test__wrapper-review">
        <div className="test__completed-title">Оставить отзыв</div>
        <div className="test__completed-review">
          <div className="test__completed-rating">{allStarsList}</div>
          <button
            className="test__sidebar-block-check test__sidebar-block-check-completed"
            onClick={sendReview}
            disabled={isTextareaDisabled}
          >
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
