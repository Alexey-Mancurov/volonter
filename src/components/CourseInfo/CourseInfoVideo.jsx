const CourseInfoVideo = (props) => {
  return (
    <div className="test__info-video">
      <iframe
        width="587px"
        height="332px"
        src={props.linkVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CourseInfoVideo;
