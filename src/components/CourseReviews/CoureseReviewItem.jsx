import GoldStar from "../common/GoldStart";
import DarkStar from "../common/DarkStart";


const CoureseReviewItem =(props)=>{

    let goldList = []
    let darkList =[]

    for(let i=0; i<props.rating; i++){
        goldList.push(<GoldStar />)
    }
    for(let i=0; i<5-props.rating; i++){
        darkList.push(<DarkStar />)
    }

    return <div className="cource__content-box cource__reviews-item">
    <div className="cource__reviews-box">
      <img src={props.img} alt="" />
      <div className="cource__reviews-rating">
          {goldList}
          {darkList}
      </div>
    </div>
    <div className="cource__reviews-content">
      <div className="cource__reviews-name">
        {props.name}
      </div>
      <div className="cource__reviews-date">{props.date}</div>
      <p className="cource__reviews-text">
        {props.text}
      </p>
    </div>
  </div>
}



export default CoureseReviewItem