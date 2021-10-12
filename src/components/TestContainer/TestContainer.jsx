import { useEffect, useState } from "react";
import { TestsAPI } from "../../api/api";
import TestAskList from "../TestAskList/TestAskList";

const TestContainer = (props) => {
  let [currentAsk, setCurrentAsk] = useState(1);

  let [isTestEnd, setIsTestEnd] = useState(false);

  let [asksList, setAskList] = useState([]);

  let [answerData, setAnswerData] = useState([]);

  let formData = [
    {
      asksList: [
        { askId: 1, answerIndex: 1 },
        { askId: 2, answerIndex: 0 },
      ],
    },
    { id: 3098 },
  ];

  // let list = {
  //   id: 3098,
  //   name: "Какой то тест",
  //   isCompleted: true,
  //   isSuccess: true,
  //   totalAsks: 2,
  //   askList: [
  //     {
  //       id: 1,
  //       ask: "Вопрос 1",
  //       options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
  //     },
  //     {
  //       id: 2,
  //       ask: "Вопрос 2",
  //       options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
  //     },
  //   ],
  // };

  // let asksList;

  // useEffect(() => {
  //   setAnswerData((answerData) => [...answerData, (asksList = [])], []);
  // });

  const prevAsk = () => {
    setCurrentAsk(currentAsk - 1);
  };

  const nextAsk = (id, checkedOption) => {
    setCurrentAsk(currentAsk + 1);
    setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  };

  const endTest = (id, checkedOption) => {
    setCurrentAsk(currentAsk + 1);
    setAskList([...asksList, { askId: id, answerIndex: checkedOption }]);
  };

  useEffect(() => {
    if (currentAsk > askCount) {
      setAnswerData([...answerData, { asksList: asksList }]);
      setAnswerData((answerData) => [...answerData, { id: testData.id }]);
      setIsTestEnd(true);
    }
  }, [asksList]);


  useEffect(() => {
    if (isTestEnd) {
      TestsAPI.testCompleted(answerData);
    }
  }, [isTestEnd, answerData]);

  let [testData, setTestData] = useState([]);

  useEffect(() => {
    TestsAPI.testItem(3098).then((testData) => {
      setTestData(testData);
      setAskCount(testData.askList.length);
    });
  }, [testData]);

  let [askCount, setAskCount] = useState(1);

  // let [testId, setTestId] = useState(testData.id)

  let askList;
  if (testData.askList) {
    askList = testData.askList.map((i) => (
      <TestAskList
        id={i.id}
        key={i.id}
        ask={i.ask}
        options={i.options}
        askCount={askCount}
        currentAsk={currentAsk}
        nextAsk={nextAsk}
        prevAsk={prevAsk}
        setAnswerData={setAnswerData}
        endTest={endTest}
      />
    ));
  } else {
    askList = <div>Подождите, идет загрузка</div>;
  }

  return <div className="test__container">{askList}</div>;
};

export default TestContainer;
