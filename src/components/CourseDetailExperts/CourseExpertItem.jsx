const CourseExpertItem =(props)=>{
    return <div class="cource__expert-item">
    <img
      class="cource__expert-img"
      src={props.img}
      alt=""
    />
    <p class="cource__expert-name">{props.name}</p>
    <p class="cource__expert-text">
      {props.description}
    </p>
  </div>
}
export default CourseExpertItem