import { useEffect, useState } from "react";
import TestAsks from "../TestAsks";
import TestResultBtn from "./TestResultBtn";
import { useLocation } from "react-router";
import Preloader from "../common/Preloader";
import store from "../../store/store";
import s from "./index.module.css";

type TAsksList = Array<{
  askId: number | string;
  answerIndex: number | null;
}>;

type TAnswerList = Array<{
  asksList: {
    askId: number | string;
    answerIndex: number | null;
  };

  id?: number | string;
}>;

type TTestData = {
  askList: Array<{
    id: number | string;
    ask: string;
    options: Array<string>;
  }>;
};

const TestContainer = () => {
  const location = useLocation();
  // @ts-ignore
  const idTest = location.state.idTest;

  const [currentAsk, setCurrentAsk] = useState(1);

  const [isTestEnd, setIsTestEnd] = useState(false);

  const [asksList, setAskList] = useState<TAsksList>([]);

  const [askCount, setAskCount] = useState(1);

  const [answerData, setAnswerData] = useState<Array<TAnswerList>>([]);

  const prevAsk = () => {
    setCurrentAsk(currentAsk - 1);
    setAskList((prev) => prev.splice(-1, 1));
  };

  const nextAsk = (id: number | string, checkedOption: number | null): void => {
    setCurrentAsk(currentAsk + 1);
    setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  };

  useEffect(() => {
    const getAcswerData = (() => {
      if (currentAsk === askCount + 1 && currentAsk !== 1) {
        // @ts-ignore
        setAnswerData([...answerData, { asksList: asksList }]);
        // @ts-ignore
        setAnswerData((answerData) => [...answerData, { id: testData.id }]);
        setIsTestEnd(true);
      }
    })();
  }, [asksList]);

  // @ts-ignore
  const [testData, setTestData] = useState<TTestData>([]);

  const [completedResponse, setCompletedResponse] = useState<any>();

  useEffect(() => {
    const getTestData = (() => {
      // @ts-ignore
      setTestData(store.TestsAPI.testItem[idTest]);
      // @ts-ignore
      setAskCount(store.TestsAPI.testItem[idTest].askList.length);
    })();
  }, [idTest]);

  useEffect(() => {
    const sendAnswerData = (() => {
      isTestEnd && setCompletedResponse(store.fakeCompleted);
      // TestsAPI.testCompleted(answerData).then((completedResponse: any) => {
      //   setCompletedResponse(completedResponse);
      // });
    })();
  }, [isTestEnd]);

  const askList = () => {
    if (testData.askList) {
      return testData.askList.map((i) => (
        // @ts-ignore
        <TestAsks
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
      ));
    } else {
      return <Preloader />;
    }
  };

  return (
    <div className={s.container}>
      {askList()}
      {currentAsk > askCount && completedResponse && (
        <TestResultBtn
          // @ts-ignore
          isLastLesson={location.state.isLastLesson}
          // @ts-ignore
          isLastModule={location.state.isLastModule}
          completedResponse={completedResponse}
        />
      )}
    </div>
  );
};

export default TestContainer;
