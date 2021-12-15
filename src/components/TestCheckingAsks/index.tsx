import TestCheckingdAskItem from "./TestCheckingdAskItem";

type TProps ={
  dataList: Array<{
    id:number|string
    ask:string
    options:any
  }>
}

const TestCheckingAsks:React.FC<TProps> = ({dataList}) => {
  let answersListChecking;
  if (dataList) {
    answersListChecking = dataList.map((i) => (
      <TestCheckingdAskItem
        num={i.id}
        key={i.id}
        ask={i.ask}
        options={i.options}
      />
    ));
  }

  return <div>{answersListChecking}</div>;
};


export default TestCheckingAsks;
