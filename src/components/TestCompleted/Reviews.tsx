import { useContext, useState, useEffect } from "react";
import { coursesAPI } from "../../api/api";
import check from "../../assets/check.svg";
import Context from "../../context/context";
import DarkStar from "../common/DarkStart/DarkStart";
import s from './index.module.css'


const Reviews = () => {
  const context = useContext(Context);

  const [darkStarList, setDarkStarList] = useState([
    { rating: 1, isGold: false },
    { rating: 2, isGold: false },
    { rating: 3, isGold: false },
    { rating: 4, isGold: false },
    { rating: 5, isGold: false },
  ]);

  const [starsNums, setStarsNum] = useState(0);

  const getDarkStarList = (index: number | undefined) => {
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
        // @ts-ignore
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

  const getReviewValue = (e: any) => {
    setReviewValue(e.target.value);
  };

  const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);

  const successAcceptedReview = () => {
    const getIsTextareaDisabled = (() => {
      setIsTextareaDisabled(true);
    })();
    const acceptedReview = (() => {
      setReviewValue("Отзыв Принят");
    })();
  };

  const sendReview = () => {
    coursesAPI
      .coursesReviewAdded(context.courseId, starsNums, reviewValue)
      .then((response) => {
        // @ts-ignore
        if (response.success) {
          successAcceptedReview();
        } else {
          console.log("Ошибка");
        }
      });
  };

  return (
    <div className={s.completed}>
      <div className={s.wrapperReview}>
        <div className={s.title}>Оставить отзыв</div>
        <div className={s.review}>
          <div className={s.rating}>{allStarsList}</div>
          <button
            className={s.check}
            onClick={sendReview}
            disabled={isTextareaDisabled}
          >
            <img src={check} alt=""></img>
          </button>
        </div>
      </div>
      <textarea
        className={s.textarea}
        placeholder="Текст"
        value={reviewValue}
        onChange={getReviewValue}
        disabled={isTextareaDisabled}
      ></textarea>
    </div>
  );
};

export default Reviews;
