const CourseMaterialsLink = ({text, link}) => {
  return (
    <>
      <div className="course__inside-item">
        <p className="course__inside-item-title">{text}</p>
        <a className="course__inside-item-download" href={link} download>
          Скачать
        </a>
      </div>
    </>
  );
};

export default CourseMaterialsLink;
