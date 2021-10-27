import CourseMaterialsLink from "./CourseMaterialsLink";

const CourseMaterialsItem = (props) => {

  let materialsList;
  if (props.materials) {
    materialsList=props.materials.map((i, index)=>(
      <CourseMaterialsLink key={index} text={i.text} link={i.link}/>

    ));
  }
  if(props.materials){
    return (
    <div className="cource__content-box course__inside-box">
      <div className="course__inside-box-title">{props.title}</div>
      <div className="course__inside-inner">
          {materialsList}
      </div>
    </div>
  );
  }else{
    return (
      <div className="cource__content-box course__inside-box">
      <div className="course__inside-box-title">{props.title}</div>
    </div>
    )
  }
  
};
export default CourseMaterialsItem;
