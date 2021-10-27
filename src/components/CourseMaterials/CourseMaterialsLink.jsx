const CourseMaterialsLink = (props) => {
  return (
    <>
      <div className="course__inside-item">
        <p className="course__inside-item-title">{props.text}</p>
        <a className="course__inside-item-download" href={props.link} download>
          Скачать
        </a>
      </div>
    </>
  );
};

export default CourseMaterialsLink;
