import { useLocation } from "react-router";
import TestCheckingAsks from "../TestCheckingAsks/TestCheckingAsk";
import TestCheckingHeader from "../TestCheckingHeader/TestCheckingHeader";
import TestCheckingBtns from "../TestCheckingAsks/TestCheckingBtns";
import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";

const TestChecking = (props) => {
  let location = useLocation();
  console.log(location);

  // получаю список курсов
  let [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    coursesAPI.lessons(29, 2989).then((lessonsList) => {
      setLessonsList(lessonsList);
    });
  }, []);

  // Получаю Урок по индексу
  let [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Получаю id Урока по индексу
  let [idCurrentLesson, setIdCurrentLesson] = useState();

  // Добавляю id в state
  useEffect(() => {
    if (lessonsList) {
      setIdCurrentLesson(
        (idCurrentLesson = lessonsList.items[currentLessonIndex].id)
      );
    }
  }, [lessonsList, currentLessonIndex]);

  // Получаю данные об Уроке
  let [lesson, setLessonItem] = useState();
  useEffect(() => {
    if (idCurrentLesson) {
      coursesAPI.lessonItem(29, 2989, idCurrentLesson).then((lesson) => {
        setLessonItem(lesson);
      });
    }
  }, [idCurrentLesson]);

  // Изменяю индекс Урока по клику на Следующий урок
  const nextLesson = () => {
    if (lessonsList.items.length !== currentLessonIndex + 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
    }
  };

  return (
    <div className="test__container">
      <TestCheckingHeader
        successTest={location.state.completedResponse.successTest}
      />
      <p className="test__container-text">
        Ваш результат:{" "}
        <span>
          {" "}
          {location.state.completedResponse.successAsks} балов из{" "}
          {location.state.completedResponse.totalAsk}{" "}
        </span>
      </p>
      <TestCheckingAsks />
      <TestCheckingBtns nextLesson={nextLesson}/>
    </div>
  );
};

export default TestChecking;
