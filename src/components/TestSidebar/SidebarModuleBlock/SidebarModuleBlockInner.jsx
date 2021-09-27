const SidebarModuleBlockInner = (props) => {
  debugger
  const moduleList = props.moduleList.map((i) => (
    <ModuleTitle key={i.id} title={i.moduleTitle} />
  ));
  return <div className="test__sidebar-block-inner">{moduleList}</div>;
};

const ModuleTitle = (props) => {
  debugger
  return (
    <div className="test__sidebar-block-item">
      <div className="test__sidebar-text">{props.title}</div>
      <div className="test__sidebar-block-check test__sidebar-block-check-completed">
        <img src="assets/check.svg" alt="" />
      </div>
    </div>
  );
};

export default SidebarModuleBlockInner;
