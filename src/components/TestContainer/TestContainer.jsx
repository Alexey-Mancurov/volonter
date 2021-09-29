import { useState } from "react";
import TestAsk from "../TestAsk/TestAsk";
import TestHeader from "../TestHeader/TestHeader";

const TestContainer = (props) => {
  let state = {
    asksList: [
      {
        ask: {
          title:
            "Вы решили стать волонтёром в Центре паллиативной помощи. Каков первый этап отбора и обучения на эту позицию?",
          options: [
            { title: "Распределение в команду" },
            { title: "Стажировка" },
            { title: "Инструктаж" },
            { title: "Заполнение анкеты" },
          ],
          id: 1,
        },
      },
      {
        ask: {
          title:
            "Вы решили стать волонтёром в Центре паллиативной помощи. Каков первый этап отбора и обучения на эту позицию?",
          options: [
            { title: "Распределение в команду" },
            { title: "Стажировка" },
            { title: "Инструктаж" },
            { title: "Заполнение анкеты" },
          ],
          id: 2,
        },
      },
      {
        ask: {
          title:
            "Вы решили стать волонтёром в Центре паллиативной помощи. Каков первый этап отбора и обучения на эту позицию?",
          options: [
            { title: "Распределение в команду" },
            { title: "Стажировка" },
            { title: "Инструктаж" },
            { title: "Заполнение анкеты" },
          ],
          id: 3,
        },
      },
    ],
  };

  let [currentAsk, setCurrentAsk] = useState(1)

  const prevAsk=()=>{
    setCurrentAsk(currentAsk-1)
  }

  const nextAsk=()=>{
    setCurrentAsk(currentAsk+1)
  }



  const askList = state.asksList.map(i=>(
    <TestAsk title={i.ask.title} options={i.ask.options} id={i.ask.id} key={i.ask.id} currentAsk={currentAsk} nextAsk={nextAsk} prevAsk={prevAsk} asksCount={state.asksList.length}/>
  ))
  return (
    <div class="test__container">
      <TestHeader currentAsk={currentAsk} asksCount={state.asksList.length}/>
      {currentAsk}
      {askList}
    </div>
  );
};

export default TestContainer;
