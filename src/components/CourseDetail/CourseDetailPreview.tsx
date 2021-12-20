import { useEffect, useState } from "react";
import editYoutubeLinkForIframe from "../../utils/editYoutubeLinkForIframe/editYoutubeLinkForIframe";
import IframeYoutube from "../common/IframeYoutube/IframeYoutube";
import s from "./index.module.css";

type TProps = {
  linkVideo: string;
  whatGive: Array<string>;
  howNeed: string;
};
const CourseDetailPreview: React.FC<TProps> = ({
  linkVideo,
  whatGive,
  howNeed,
}) => {
  const [linkVideoForIframe, setLinkVideoForIframe] = useState();

  useEffect(() => {
    linkVideo && editYoutubeLinkForIframe(linkVideo, setLinkVideoForIframe);
  }, [linkVideo]);

  const previewList = () => {
    return whatGive?.map((i, index) => (
      <li key={index} className={s.item}>
        {i}
      </li>
    ));
  };

  return (
    <div className={s.preview}>
      <IframeYoutube link={linkVideoForIframe} addedClass={s.videoIframe} />
      <div className={s.previewContent}>
        <p className={`course__title-4 ${s.previewTitle}`}>
          Что вы получите, пройдя курс
        </p>
        <p className={"course__text"}>Благодаря этому курсу, вы:</p>
        <ul className={s.list}>{previewList()}</ul>
        <p className="course__title-4">Для кого подходит курс</p>
        <p className="course__text">{howNeed}</p>
      </div>
    </div>
  );
};

export default CourseDetailPreview;
