import { useState } from "react";
import Tabs from "../common/Tabs/Tabs";
import TabsGrayUnderline from "../common/TabsGrayUnderline/TabsGrayUnderline.tsx";

const Header = ({ filterStatic, filterLevel, getFilter }) => {
  const [currentIndexActiveLvl, setCurrentIndexActiveLvl] = useState();

  const [currentIndexActiveTab, setCurrentIndexActiveTab] = useState(0);

  const actionFilter = (param) => {
    param === "allCourses" && setCurrentIndexActiveLvl(null);
    getFilter(param);
  };

  return (
    <div className="cource__tab-wrapper">
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
