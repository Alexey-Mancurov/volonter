import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import CourseInfoVideo from "./CourseInfoVideo";

const CourseInfo = (props) => {
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

  // Изменяю индекс Урока по клику на Предыдущий урок
  const prevLesson = () => {
    if (currentLessonIndex === 0) {
      setCurrentLessonIndex((currentLessonIndex = 0));
    } else {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  // Преобразование linkVideo чтобы, отображать и в iframe, и ссылкой
  let [linkVideoForIframe, setLinkVideoForIframe] = useState();
  useEffect(() => {
    if (lesson) {
      setLinkVideoForIframe(
        (linkVideoForIframe = lesson.item.linkVideo.replace(
          "watch?v=",
          "embed/"
        ))
      );
    }
  }, [lesson]);

  if (lesson) {
    return (
      <>
        <div className="test__info">
          <CourseInfoVideo linkVideo={linkVideoForIframe} />
          <CourceInfoContent
            title={lesson.item.title}
            description={lesson.item.description}
            info={lesson.item.info}
            linkVideo={lesson.item.linkVideo}
          />
        </div>
        <CourseInfoActions
          // currentLesson={currentLessonIndex}
          nextLesson={nextLesson}
          prevLesson={prevLesson}
          getActiveTest={props.getActiveTest}
        />
        {/* Тут еще слайдер добавить */}
      </>
    );
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default CourseInfo;
