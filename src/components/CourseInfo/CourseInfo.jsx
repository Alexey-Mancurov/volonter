import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import CourseInfoVideo from "./CourseInfoVideo";
import CourseInfoActionsCompleted from "./CourseInfoActionsCompleted";
import Preloader from "../common/Preloader";

const CourseInfo = (props) => {

  // Для отображения прелоадера
  let [isLoading, setIsLoading] = useState(false);

  // Получаю данные об Уроке
  let [lesson, setLessonItem] = useState();
  useEffect(() => {
    if (props.idCurrentLesson) {
      setIsLoading(true);
      coursesAPI
        .lessonItem(
          props.courseId,
          props.idCurrentModule,
          props.idCurrentLesson
        )
        .then((lesson) => {
          setLessonItem(lesson);
          setIsLoading(false);
        });
    }
  }, [props.idCurrentLesson]);

  // Преобразование linkVideo чтобы, отображать и в iframe, и ссылкой
  let [linkVideoForIframe, setLinkVideoForIframe] = useState();
  useEffect(() => {
    if (lesson) {
      if (lesson.item.linkVideo) {
        setLinkVideoForIframe(
          (linkVideoForIframe = lesson.item.linkVideo.replace(
            "watch?v=",
            "embed/"
          ).replace('youtube', 'youtube-nocookie'))
        );

      } else {
        setLinkVideoForIframe(
          (linkVideoForIframe = null)
        );
      }
    }
  }, [lesson]);


  if (lesson) {
    if (!isLoading) {
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
          {lesson.item.check ? (
            <CourseInfoActionsCompleted
              nextLesson={props.nextLesson}
              prevLesson={props.prevLesson}
              getActiveTest={props.getActiveTest}
              isLastLesson={props.isLastLesson}
              isLastModule={props.isLastModule}
              lesson={lesson}
            />
          ) : (
            <CourseInfoActions
              nextLesson={props.nextLesson}
              prevLesson={props.prevLesson}
              getActiveTest={props.getActiveTest}
              isLastLesson={props.isLastLesson}
              isLastModule={props.isLastModule}
              lesson={lesson}
            />
          )}
        </>
      );
    } else {
      return <Preloader />;
    }
  } else {
    return  <Preloader />;
  }
};

export default CourseInfo;
