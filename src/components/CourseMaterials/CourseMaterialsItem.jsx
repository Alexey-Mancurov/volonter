const CourseMaterialsItem =(props)=>{

    return <div class="cource__content-box course__inside-box">
    <div class="course__inside-box-title">
      {props.title}
    </div>
    <div class="course__inside-inner">
      <div class="course__inside-item">
        <p class="course__inside-item-title">{props.materials.text}</p>
        <a class="course__inside-item-download" href={props.materials.link} download>
          Скачать
        </a>
      </div>
    </div>
  </div>
}
export default CourseMaterialsItem