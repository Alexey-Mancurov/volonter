import TestCheckingBtns from "./TestCheckingBtns";
import TestCheckingTitle from "./TestCheckingTitle";

const TestCheckingdAsk = (props) => {

  let answersListChecking
  if(props.dataList){
    answersListChecking= props.dataList.map((i, index)=>(
    <TestCheckingdAskItem num={i.id} key={i.id} ask={i.ask} options={i.options}/>
  ))
  }

  return (
    <div>
      {answersListChecking}
    </div>
    
  );
};

const TestCheckingdAskItem = (props)=>{
  let allAnswers = props.options
  let answersLength = allAnswers.length
  let answerCorrect = allAnswers[answersLength-2]
  let answerVolont = allAnswers[answersLength-1]
  
  return <div className="test__ask">
  <TestCheckingTitle num={props.num} answerCorrect={answerCorrect} answerVolont={answerVolont}/>
  <p className="test__container-text test__ask-question">
    {props.ask}
  </p>
  <div className="test__container-text test__ask-text">
    {allAnswers[answerCorrect]}
  </div>
  
</div>
}

export default TestCheckingdAsk;
