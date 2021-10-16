import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TestsAPI } from "../../api/api";
import TestAskList from "../TestAskList/TestAskList";
import TestResultBtn from "../TestResultBtn/TestResultBtn";
import { useLocation } from "react-router";

const TestContainer = (props) => {
  let location = useLocation();

  let [currentAsk, setCurrentAsk] = useState(1);

  let [isTestEnd, setIsTestEnd] = useState(false);

  let [asksList, setAskList] = useState([]);

  let [answerData, setAnswerData] = useState([]);

  const prevAsk = () => {
    setCurrentAsk(currentAsk - 1);
  };

  const nextAsk = (id, checkedOption) => {
    setCurrentAsk(currentAsk + 1);
    setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  };

  // const endTest = (id, checkedOption) => {
  //   setCurrentAsk(currentAsk + 1);
  //   setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  // };

  useEffect(() => {
    // закомментированный код ниже, на случай, если автокомплит исправит круглые скобки
    // (currentAsk === (askCount+1) && currentAsk !== 1)
    if (currentAsk === (askCount+1) && currentAsk !== 1) {
      setAnswerData([...answerData, { asksList: asksList }]);
      setAnswerData((answerData) => [...answerData, { id: testData.id }]);
      setIsTestEnd(true);
    }
  }, [asksList]); 

  let [completedResponse, setCompletedResponse] = useState();

  useEffect(() => {
    if (isTestEnd) {
      TestsAPI.testCompleted(answerData).then((completedResponse) => {
        setCompletedResponse(completedResponse);
      });
    }
  }, [isTestEnd]);


  let [testData, setTestData] = useState([]);

  let idTest = location.state.idTest
  useEffect(() => {
    TestsAPI.testItem(idTest).then((testData) => {
      setTestData(testData);
      setAskCount(testData.askList.length);
    });
  }, [idTest]);

  let [askCount, setAskCount] = useState(1);

  // let [testId, setTestId] = useState(testData.id)

  let askList;
  if (testData.askList) {
    askList = testData.askList.map((i,index) => (
      <TestAskList
        id={index}
        key={index}
        ask={i.ask}
        options={i.options}
        askCount={askCount}
        currentAsk={currentAsk}
        nextAsk={nextAsk}
        prevAsk={prevAsk}
        setAnswerData={setAnswerData}
        completedResponse={completedResponse}
      />
    ));
  } else {
    askList = <div>Подождите, идет загрузка</div>;
  }

  return (<div className="test__container">{askList}
        {currentAsk>askCount
        ? 
          completedResponse
          ? <TestResultBtn isLastLesson={location.state.isLastLesson} isLastModule={location.state.isLastModule} completedResponse={completedResponse} courseId={props.courseId}/>
          : <div>Пожалуйста, подождите</div>
        : ''}
        </div>)
         
};

export default TestContainer;
