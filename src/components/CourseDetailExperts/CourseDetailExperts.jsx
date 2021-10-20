import CourseExpertItem from "./CourseExpertItem";

const CourseDetailExperts = (props) => {
  let expertsList;

  // if (props.experts) {
  //   expertsList = props.experts.map((i) => (
  //     <CourseExpertItem img={i.img} name={i.name} description={i.description} />
  //   ));
  // }
  return (
    <>
      <p class="cource__title-2">Эксперты</p>
      <div class="cource__experts">
        {expertsList}

        {/* <div class="cource__expert-item">
          <img
            class="cource__expert-img"
            src="img/course/experts/img8.png"
            alt=""
          />
          <p class="cource__expert-name">Михаил Бондарев</p>
          <p class="cource__expert-text">Основатель фонда "Шередарь"</p>
        </div> */}
      </div>
    </>
  );
};

export default CourseDetailExperts;
