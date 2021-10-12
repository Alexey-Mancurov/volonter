const SidebarDataTotalFractional = (props) => {
  return (
    <div className="test__sidebar-box">
      <div className="test__sidebar-num">{props.numCurrent}/{props.numAll}</div>
      <div className="test__sidebar-title">{props.title}</div>
    </div>
  );
};

export default SidebarDataTotalFractional;
