import SidebarDataTotalFractional from "./SidebarDataTotalFractional";
import SidebarDataTotalInteger from "./SidebarDataTotalInteger";

const TotalPoints = (props) => {
  return <SidebarDataTotalInteger num={props.num} title={props.title} />;
};

const AsksCounts = (props) => {
  return <SidebarDataTotalFractional numCurrent={props.numCurrent} numAll={props.numAll} title={props.title} />;
};

const SidebarDataAboutTestDesctop = (props) => {
  let state = {
    titlePoints: "Общее количество баллов",
    titleAsks: "Количество вопросов ",
 };
 console.log(props.course)
  if (props.course) {
    return (
      <>
        <TotalPoints num={props.course.course.totalPoints} title={state.titlePoints}/>
        <AsksCounts numCurrent={props.course.course.checkAsks} numAll={props.course.course.totalAsks} title={state.titleAsks}/>
      </>
    );
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default SidebarDataAboutTestDesctop;
