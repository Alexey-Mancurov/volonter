import SidebarDataAboutTest from "./SidebarDataAboutTest";

const SidebarDataAboutTestDesctop = (props) => {
  debugger;
  let dataList = props.generalDataAboutTest.map((i) => (
    <SidebarDataAboutTest key={i.id} num={i.num} title={i.title} />
  ));
  return <>{dataList}</>;
};

export default SidebarDataAboutTestDesctop;
