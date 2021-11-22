import { useContext, useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import Preloader from "../common/Preloader";
import Context from "../../context/context";
import editYoutubeLinkForIframe from "../../Controller/editYoutubeLinkForIframe";
import IframeYoutube from "../common/IframeYoutube";

const CourseInfo = (props) => {
  const context = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);

  const [lessonData, setLessonData] = useState();
  useEffect(() => {
    if (props.idCurrentLesson) {
      setIsLoading(true);
      const getLessonData = (() => {
        coursesAPI
          .lessonItem(
            context.courseId,
            props.idCurrentModule,
            props.idCurrentLesson
          )
          .then((lesson) => {
            setLessonData(lesson);
            setIsLoading(false);
          });
      })();
    }
  }, [props.idCurrentLesson, context.courseId, props.idCurrentModule]);

  const [linkVideoForIframe, setLinkVideoForIframe] = useState();
  useEffect(() => {
    lessonData &&
      editYoutubeLinkForIframe(
        lessonData.item.linkVideo,
        setLinkVideoForIframe
      );
  }, [lessonData]);

  console.log(lessonData);

  if (lessonData) {
    if (!isLoading) {
      return (
        <>
          <div className="test__info">
            <IframeYoutube
              link={linkVideoForIframe}
              addedClass={"test__info-video"}
            />
            <CourceInfoContent
              title={lessonData.item.title}
              description={lessonData.item.description}
              info={lessonData.item.info}
              linkVideo={lessonData.item.linkVideo}
            />
          </div>
          <CourseInfoActions
            lesson={lessonData}
            isChecked={lessonData.item.check}
            nextLesson={props.nextLesson}
            prevLesson={props.prevLesson}
            getActiveTest={props.getActiveTest}
            isLastLesson={props.isLastLesson}
            isLastModule={props.isLastModule}
          />
        </>
      );
    } else {
      return <Preloader />;
    }
  } else {
    return <Preloader />;
  }
};

export default CourseInfo;
