import { useState, useContext, useEffect } from "react";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import Preloader from "../common/Preloader";
import Context from "../../context/context";
import editYoutubeLinkForIframe from "../../utils/editYoutubeLinkForIframe";
import IframeYoutube from "../common/IframeYoutube";
import store from "../../store/store";
import TestContext from "../../context/testContext";

const CourseInfo = (props) => {
  const context = useContext(Context);
  const testContext = useContext(TestContext)

  const [isLoading, setIsLoading] = useState(false);

  const [lessonData, setLessonData] = useState();

  useEffect(() => {
    if (testContext.idCurrentLesson) {
      setIsLoading(true);
      const getLessonData = (() => {
        setLessonData(store.coursesAPI.lessonItem[context.courseId][testContext.idCurrentModule][testContext.idCurrentLesson])
        setIsLoading(false)
      })();
    }
  }, [testContext.idCurrentLesson, context.courseId, testContext.idCurrentModule]);

  const [linkVideoForIframe, setLinkVideoForIframe] = useState();
  useEffect(() => {
    lessonData &&
      editYoutubeLinkForIframe(
        lessonData.item.linkVideo,
        setLinkVideoForIframe
      );
  }, [lessonData]);

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
