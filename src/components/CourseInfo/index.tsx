import { useState, useContext, useEffect } from "react";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import Preloader from "../common/Preloader";
import Context from "../../context/context";
import IframeYoutube from "../common/IframeYoutube/IframeYoutube";
import store from "../../mock/mock";
import TestContext from "../../context/testContext";
import editYoutubeLinkForIframe from "../../utils/editYoutubeLinkForIframe/editYoutubeLinkForIframe";
import s from "./index.module.css";


type TLessonData = {
  success: boolean;
  item: {
    id: number | string;
    title: string;
    check: boolean;
    linkVideo: string;
    description: string;
    info: Array<string>;
    idListTests: Array<string>;
  };
};

const CourseInfo = () => {
  const context = useContext(Context);
  const testContext = useContext(TestContext);

  const [isLoading, setIsLoading] = useState(false);

  const [lessonData, setLessonData] = useState<TLessonData>();

  useEffect(() => {
    if (testContext.idCurrentLesson) {
      setIsLoading(true);
      const getLessonData = (() => {
        setLessonData(
          // @ts-ignore
          store.coursesAPI.lessonItem[context.courseId][
            testContext.idCurrentModule
          ][testContext.idCurrentLesson]
        );
        setIsLoading(false);
      })();
    }
  }, [
    testContext.idCurrentLesson,
    context.courseId,
    testContext.idCurrentModule,
  ]);

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
          <div className={s.container}>
            <IframeYoutube
              link={linkVideoForIframe}
              addedClass={s.video}
            />
            <CourceInfoContent
              title={lessonData.item.title}
              description={lessonData.item.description}
              info={lessonData.item.info}
              linkVideo={lessonData.item.linkVideo}
            />
          </div>
          <CourseInfoActions
            idListTests={lessonData.item.idListTests}
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
