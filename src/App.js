import { useState } from "react";
import "./App.css";
import Course from "./components/Course/Course";
import Main from "./components/Main";

function App() {
  let state ={
    leasonList:[
      {title: 'Курс 1', id: 1},
      {title: 'Курс 2', id: 2},
      {title: 'Курс 3', id: 3},
      {title: 'Курс 4', id: 4},
    ],
  }
  let [currentLesson, setCurrentLeason] = useState(1);

  const nextLesson = () => {
    setCurrentLeason(currentLesson+1);
  };
  const prevLesson = ()=>{
    setCurrentLeason(currentLesson-1);
  }

  let [isActiveTest, setActiveTest] = useState(true)

  const getActiveTest = ()=>{
    setActiveTest(true)
  }

  const allLeasons = state.leasonList.map(i=>(
    <Main key={i.id} title={i.title} currentLesson={currentLesson} nextLesson={nextLesson} prevLesson={prevLesson} id={i.id} isActiveTest={isActiveTest} getActiveTest={getActiveTest}/>
  ))
  return (
    <div className="App" >
        {allLeasons}
    </div>
  );
}

export default App;
