import TabItem from "./TabItem";

const TabsGrayUnderline = ({ list, isIndex, action, setActive, currentActive }) => {
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

  return <ul className="cource__level">{tabsList}</ul>;
};
export default TabsGrayUnderline;
