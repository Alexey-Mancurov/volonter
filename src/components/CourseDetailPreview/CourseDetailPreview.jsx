import { useEffect, useState } from "react";

const CourseDetailPreview = (props) => {
  
  // Преобразование linkVideo чтобы, отображать и в iframe, и ссылкой
  let [linkVideoForIframe, setLinkVideoForIframe] = useState();
  useEffect(() => {
    if (props.courseDetailData) {
      if (props.courseDetailData.linkVideo) {
        setLinkVideoForIframe(
          (linkVideoForIframe = props.courseDetailData.linkVideo
            .replace("watch?v=", "embed/")
            .replace("youtube", "youtube-nocookie"))
        );
      } else {
        setLinkVideoForIframe((linkVideoForIframe = null));
      }
    }
  }, []);

  let previewList;
  if (props.courseDetailData.whatGive) {
    previewList = props.courseDetailData.whatGive.map((i) => (
      <li class="course__list-item course__preview-item">{i}</li>
    ));
  }
  return (
    <div class="course__preview">
      <div class="course__preview-video">
        <iframe
          width="790"
          height="447"
          src={linkVideoForIframe}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="course__preview-content">
        <p class="course__title-4 course__preview-title">
          Что вы получите, пройдя курс
        </p>
        <p class="course__text">Благодаря этому курсу, вы:</p>
        <ul class="cource__content-list course__preview-list">
          {previewList}
        </ul>
        <p class="course__title-4">Для кого подходит курс</p>
        <p class="course__text">
          {props.courseDetailData.howNeed}
        </p>
      </div>
    </div>
  );
};

export default CourseDetailPreview;
