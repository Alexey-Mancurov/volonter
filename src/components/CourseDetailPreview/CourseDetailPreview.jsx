import { useEffect, useState } from "react";
import editYoutubeLinkForIframe from "../../Controller/editYoutubeLinkForIframe";
import IframeYoutube from "../common/IframeYoutube";

const CourseDetailPreview = (props) => {
  const [linkVideoForIframe, setLinkVideoForIframe] = useState();

  useEffect(() => {
    props.courseDetailData &&
      editYoutubeLinkForIframe(
        props.courseDetailData.linkVideo,
        setLinkVideoForIframe
      );
  }, [props.courseDetailData]);

  let previewList;
  if (props.courseDetailData.whatGive) {
    previewList = props.courseDetailData.whatGive.map((i, index) => (
      <li key={index} className="course__list-item course__preview-item">
        {i}
      </li>
    ));
  }

  return (
    <div className="course__preview">
      <IframeYoutube
        link={linkVideoForIframe}
        addedClass={"course__preview-video"}
      />
      <div className="course__preview-content">
        <p className="course__title-4 course__preview-title">
          Что вы получите, пройдя курс
        </p>
        <p className="course__text">Благодаря этому курсу, вы:</p>
        <ul className="cource__content-list course__preview-list">
          {previewList}
        </ul>
        <p className="course__title-4">Для кого подходит курс</p>
        <p className="course__text">{props.courseDetailData.howNeed}</p>
      </div>
    </div>
  );
};

export default CourseDetailPreview;
