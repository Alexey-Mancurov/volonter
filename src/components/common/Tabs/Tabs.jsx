import TabItem from "./TabItem";

const Tabs = ({ list, isIndex,  action, setActive, currentActive }) => {
  let tabsList;

  if (list) {
    tabsList = list.map((i, index) => (
      <TabItem
        key={index}
        index={index}
        isIndex={isIndex}
        text={i.text}
        data={i.path}
        action={action}
        currentActive={currentActive}
        setActive={setActive}
      />
    ));
  }

  return <ul className="tabs tabs__course">{tabsList}</ul>;
};

export default Tabs;
