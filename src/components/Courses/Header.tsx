import { useState } from "react";
import Tabs from "../common/Tabs";
import s from "./index.module.css";
import TabsGrayUnderline from "../common/TabsGrayUnderline";

type TProps = {
  filterStatic: Array<any>;
  filterLevel: Array<{
    text: string;
    path: string;
  }>;
  getFilter: (param: string) => void;
};
const Header: React.FC<TProps> = ({ filterStatic, filterLevel, getFilter }) => {
  const [currentIndexActiveLvl, setCurrentIndexActiveLvl] = useState<
    number | null |undefined
  >();

  const [currentIndexActiveTab, setCurrentIndexActiveTab] = useState(0);

  const actionFilter = (param: string) => {
    param === "allCourses" && setCurrentIndexActiveLvl(null);
    getFilter(param);
  };

  return (
    <div className={s.wrapperHeader}>
      <Tabs
        list={filterStatic}
        action={actionFilter}
        setActive={setCurrentIndexActiveTab}
        currentActive={currentIndexActiveTab}
      />
      <TabsGrayUnderline
        list={filterLevel}
        action={actionFilter}
        setActive={setCurrentIndexActiveLvl}
        currentActive={currentIndexActiveLvl}
      />
    </div>
  );
};

export default Header;
