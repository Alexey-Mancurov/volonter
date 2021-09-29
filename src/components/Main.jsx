import Course from "./Course/Course";

const Main = (props) => {
  return (
    props.currentLesson === props.id ? 
    <main className="main main_inner">
      <h1 className="title title-course">
        {props.title}
      </h1>
      <Course addedClassForWrapper={"test__wrapper-info"} currentLesson={props.currentLesson} nextLesson={props.nextLesson} prevLesson={props.prevLesson} isActiveTest={props.isActiveTest} getActiveTest={props.getActiveTest}/>
      
    </main>
    : null
  );
};

export default Main;
