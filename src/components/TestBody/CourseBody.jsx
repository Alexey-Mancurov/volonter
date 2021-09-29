import CoursePreview from "../CoursePreview/CoursePreview";
import TestContainer from "../TestContainer/TestContainer";


const TestBody = (props) => {
  debugger
  return (
    <div className="test__wrapper-body">
      {props.isActiveTest 
      ? <TestContainer />
      :<CoursePreview currentLesson={props.currentLesson} nextLesson={props.nextLesson} prevLesson={props.prevLesson} getActiveTest={props.getActiveTest} />
    }
      
      
      {/* <TestContainerHeader /> */}
      {/* <TestModilSidebar /> */}
      {/* Подумать, получится ли слайдер встроить не на реакте */}
    </div>
  );
};

export default TestBody
