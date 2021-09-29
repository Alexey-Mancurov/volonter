import { useState } from "react";
import check from "../../../assets/check.svg";

const SidebarModuleBlockInner = (props) => {
  const moduleList = props.moduleList.map((i) => (
    <ModuleTitle key={i.id} title={i.moduleTitle} />
  ));
  return <div className="test__sidebar-block-inner">{moduleList}</div>;
};

const ModuleTitle = (props) => {
  const [isCompleted, setCompleted] = useState(false);

  const checkCompleted = () => {
    setCompleted(true);
  };

  return (
    <div className="test__sidebar-block-item">
      <div className="test__sidebar-text">{props.title}</div>
      <div className={`test__sidebar-block-check ${isCompleted ?'test__sidebar-block-check-completed' : ''}`}>
        <img src={check} alt="" />
      </div>
    </div>
  );
};

export default SidebarModuleBlockInner;
