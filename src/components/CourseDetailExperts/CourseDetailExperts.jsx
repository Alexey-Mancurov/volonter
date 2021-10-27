import CourseExpertItem from "./CourseExpertItem";

const CourseDetailExperts = (props) => {
  let expertsList;

  if (props.experts) {
    expertsList = props.experts.map((i, index) => (
      <CourseExpertItem key={index} img={i.img} name={i.name} description={i.description} />
    ));
  }
  return (
    <>
      <p className="cource__title-2">Эксперты</p>
      <div className="cource__experts">
        {expertsList}

        {/* <div className="cource__expert-item">
          <img
            className="cource__expert-img"
            src="img/course/experts/img8.png"
            alt=""
          />
          <p className="cource__expert-name">Михаил Бондарев</p>
          <p className="cource__expert-text">Основатель фонда "Шередарь"</p>
        </div> */}
      </div>
    </>
  );
};

export default CourseDetailExperts;
