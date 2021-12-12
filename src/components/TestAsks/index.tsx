import { useState } from "react";
import CheckList from "./CheckList";
import Actions from "./Actions";
import Header from "./Header";

type TProps = {
  id: number | string;
  ask: string;
  askCount: number | string;
  currentAsk: number | string;
  nextAsk:  (id:number|string, checkedOption:number|null)=>void;
  prevAsk:  (id:number|string, checkedOption:number|null)=>void;
  options: Array<string>;
  completedResponse: any;
};

const TestAsks = ({
  id,
  ask,
  askCount,
  currentAsk,
  nextAsk,
  prevAsk,
  options,
  completedResponse
}:TProps) => {
  const [checkedOption, setCheckedOption] = useState<number | null>(null);

  const getCheckedOption = (checkedOption: number) => {
    setCheckedOption(checkedOption);
  };

  const localNextAsk = () => {
    nextAsk(id, checkedOption);
  };
  const localPrevAsk = () => {
    prevAsk(id, checkedOption);
  };

  return (
    currentAsk === id && (
      <div>
        <Header ask={ask} currentAsk={currentAsk} askCount={askCount} />
        <CheckList options={options} getCheckedOption={getCheckedOption} />
        <Actions
          currentAsk={currentAsk}
          localPrevAsk={localPrevAsk}
          askCount={askCount}
          localNextAsk={localNextAsk}
          completedResponse={completedResponse}
        />
      </div>
    )
  );
};

export default TestAsks;
