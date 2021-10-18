const SidebarDataTotalFractional = (props) => {
  return (
    <div className="test__sidebar-box">
      <div className="test__sidebar-num"><p><span>{props.numCurrent}/{props.numAll}</span></p></div>
      <div className="test__sidebar-title">{props.title}</div>
    </div>
  );
};

export default SidebarDataTotalFractional;
