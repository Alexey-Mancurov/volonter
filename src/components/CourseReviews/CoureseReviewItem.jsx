import GoldStar from "../common/GoldStart";
import DarkStar from "../common/DarkStart";


const CoureseReviewItem =(props)=>{
  debugger
    let goldList = []
    let darkList =[]

    for(let i=0; i<props.rating; i++){
        goldList.push(<GoldStar />)
    }
    for(let i=0; i<5-props.rating; i++){
        darkList.push(<DarkStar />)
    }

    return <div class="cource__content-box cource__reviews-item">
    <div class="cource__reviews-box">
      <img src={props.img} alt="" />
      <div class="cource__reviews-rating">
          {goldList}
          {darkList}
      </div>
    </div>
    <div class="cource__reviews-content">
      <div class="cource__reviews-name">
        {props.name}
      </div>
      <div class="cource__reviews-date">{props.date}</div>
      <p class="cource__reviews-text">
        {props.text}
      </p>
    </div>
  </div>
}



export default CoureseReviewItem