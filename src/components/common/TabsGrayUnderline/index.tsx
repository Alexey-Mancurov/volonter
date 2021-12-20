import TabItem from "./TabItem";
import s from "./index.module.css";

type PropsType = {
  list: Array<{
    text: string;
    path: string;
  }>;
  isIndex?: boolean;
  action: Function;
  setActive: Function;
  currentActive: number | null | undefined;
};
const TabsGrayUnderline: React.FC<PropsType> = ({
  list,
  isIndex,
  action,
  setActive,
  currentActive,
}) => {
  const tabsList = () => {
    return list?.map((i, index) => (
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
  };

  return <ul className={s.list}>{tabsList()}</ul>;
};

export default TabsGrayUnderline;