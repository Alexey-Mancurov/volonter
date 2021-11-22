import { useEffect, useState } from "react";
import { TestsAPI } from "../../api/api";
import TestAskList from "../TestAskList/TestAskList";
import TestResultBtn from "../TestResultBtn/TestResultBtn";
import { useLocation } from "react-router";
import Preloader from "../common/Preloader";

const TestContainer = () => {
  const location = useLocation();
  const idTest = location.state.idTest;

  const [currentAsk, setCurrentAsk] = useState(1);

  const [isTestEnd, setIsTestEnd] = useState(false);

  const [asksList, setAskList] = useState([]);

  const [askCount, setAskCount] = useState(1);

  const [answerData, setAnswerData] = useState([]);

  const prevAsk = () => {
    setCurrentAsk(currentAsk - 1);
    setAskList((prev) => prev.splice(-1, 1));
  };

  const nextAsk = (id, checkedOption) => {
    setCurrentAsk(currentAsk + 1);
    setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  };

  useEffect(() => {
    const getAcswerData = (() => {
      if (currentAsk === askCount + 1 && currentAsk !== 1) {
        setAnswerData([...answerData, { asksList: asksList }]);
        setAnswerData((answerData) => [...answerData, { id: testData.id }]);
        setIsTestEnd(true);
      }
    })();
  }, [asksList]);

  const [testData, setTestData] = useState([]);

  const [completedResponse, setCompletedResponse] = useState();

  useEffect(() => {
    const getTestData = (() => {
      TestsAPI.testItem(idTest).then((testData) => {
        setTestData(testData);
        setAskCount(testData.askList.length);
      });
    })();
  }, [idTest]);

  useEffect(() => {
    const sendAnswerData = (() => {
      isTestEnd &&
        TestsAPI.testCompleted(answerData).then((completedResponse) => {
          setCompletedResponse(completedResponse);
        });
    })();
  }, [isTestEnd]);

  let askList;
  testData.askList
    ? (askList = testData.askList.map((i) => (
        <TestAskList
          id={i.id}
          key={i.id}
          ask={i.ask}
          options={i.options}
          askCount={askCount}
          currentAsk={currentAsk}
          nextAsk={nextAsk}
          prevAsk={prevAsk}
          completedResponse={completedResponse}
        />
      )))
    : (askList = <Preloader />);

  return (
    <div className="test__container">
      {askList}
      {currentAsk > askCount && completedResponse && (
        <TestResultBtn
          isLastLesson={location.state.isLastLesson}
          isLastModule={location.state.isLastModule}
          completedResponse={completedResponse}
        />
      )}
    </div>
  );
};

export default TestContainer;
