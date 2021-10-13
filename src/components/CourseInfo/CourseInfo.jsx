import { useContext, useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import { Context } from "../../context/context";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import CourseInfoVideo from "./CourseInfoVideo";

const CourseInfo = (props) => {
  const {courseId}=useContext(Context)

  // Получаю список Модулей
  let [moduleList, setModuleList] = useState();
  useEffect(() => {
    coursesAPI.modules(courseId).then((moduleList) => {
      setModuleList(moduleList);
    });
  }, []);

  // Получаю Модуль по индексу
  let [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  // Получаю id Модуля по индексу
  let [idCurrentModule, setIdCurrentModule] = useState();

  // Добавляю id Модуля в state
  useEffect(() => {
    if (moduleList) {
      setIdCurrentModule(
        (idCurrentModule = moduleList.items[currentModuleIndex].id)
      );
    }
  }, [moduleList, currentModuleIndex]);

  // получаю список Уроков
  let [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    if (moduleList && idCurrentModule) {
      coursesAPI.lessons(courseId, idCurrentModule).then((lessonsList) => {
        setLessonsList(lessonsList);
      });
    }
  }, [moduleList, idCurrentModule]);

  // Получаю Урок по индексу
  let [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Получаю id Урока по индексу
  let [idCurrentLesson, setIdCurrentLesson] = useState();

  // Добавляю id Урока в state
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
      coursesAPI.lessonItem(courseId, idCurrentModule, idCurrentLesson).then((lesson) => {
        setLessonItem(lesson);
      });
    }
  }, [idCurrentLesson]);

  // if(lesson.idListTests){
  //    console.log(lesson.idListTests)
  // }
 

  // Изменяю индекс Урока по клику на Следующий урок
  const nextLesson = () => {
    if (lessonsList.items.length !== currentLessonIndex + 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      if (moduleList.items.length !== currentModuleIndex + 1) {
        setCurrentModuleIndex(currentModuleIndex + 1);
        setCurrentLessonIndex((currentLessonIndex = 0));
      } else{
        alert('Это последний урок')
      }
    }
  };

  // Последний модуль в курсе?
  let [isLastModule, setIsLastModule] = useState(false)
  useEffect(()=>{
    if(moduleList && currentModuleIndex && moduleList.items.length === currentModuleIndex+1){
      setIsLastModule(isLastModule =true)
    }else{
      setIsLastModule(isLastModule=false)
    }
  }, [currentModuleIndex, moduleList])


  // Последний урок в курсе?
  let [isLastLesson, setIsLastLesson] = useState(false);
  useEffect(() => {

    if (
      lessonsList &&
      currentLessonIndex &&
      lessonsList.items.length === (currentLessonIndex+1)
    ) {
      setIsLastLesson(isLastLesson = true);
    } else {
      setIsLastLesson(isLastLesson = false);
    }
  }, [currentLessonIndex, lessonsList]);

  // Изменяю индекс Урока по клику на Предыдущий урок
  const prevLesson = () => {
    if (currentLessonIndex === 0 && currentModuleIndex === 0) {
      setCurrentLessonIndex((currentLessonIndex = 0));
      setCurrentLessonIndex((currentModuleIndex = 0));
      alert('Это самый первый урок')
    } else if(currentLessonIndex > 0){
      setCurrentLessonIndex(currentLessonIndex-1)
    } else if(currentLessonIndex === 0 && currentModuleIndex !== 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(currentLessonIndex=lessonsList.items.length-1)
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
          isLastLesson={isLastLesson}
          isLastModule={isLastModule}
          lesson={lesson}
        />
        {/* Тут еще слайдер добавить */}
      </>
    );
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default CourseInfo;
