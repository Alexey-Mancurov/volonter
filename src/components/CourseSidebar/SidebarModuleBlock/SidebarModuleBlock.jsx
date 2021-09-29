import { useState } from "react";
import SidebarModuleBlockHeader from "./SidebarModuleBlockHeader";
import SidebarModuleBlockInner from "./SidebarModuleBlockInner";

const SidebarModuleBlock = (props) => {


  let [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen =()=>{
    setIsOpen(!isOpen)
  }



  return (
    <div
      className={`test__sidebar-block ${
        isOpen ? `test__sidebar-block-open` : null
      }`}
      onClick={toggleIsOpen}
    >
      <SidebarModuleBlockHeader title={props.title}/>
      <SidebarModuleBlockInner moduleList={props.moduleList}/>
    </div>
  );
};

export default SidebarModuleBlock;
