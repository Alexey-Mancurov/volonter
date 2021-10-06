const CourseInfoVideo = (props) => {
  if(!props.linkVideo){
    return <div class="test__info-video">
      ОШИБКА получения видео
    </div>
  }
  return (
    <div class="test__info-video">
      <iframe
        width="790"
        height="447"
        src={props.linkVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CourseInfoVideo;
