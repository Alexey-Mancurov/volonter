import SidebarDataAboutTest from "./SidebarDataAboutTest";

const SidebarDataAboutTestMobil = (props) => {
  let dataListMobil = props.generalDataAboutTest.map((i) => (
    <SidebarDataAboutTest key={i.id} num={i.num} title={i.title} />
  ));
  return <div className="test__sidebar-container">{dataListMobil}</div>;
};

export default SidebarDataAboutTestMobil;
