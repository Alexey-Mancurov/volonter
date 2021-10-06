import { useEffect, useState } from "react";
import { coursesAPI } from "../../../api/api";
import SidebarModuleBlockHeader from "./SidebarModuleBlockHeader";
import SidebarModuleBlockInner from "./SidebarModuleBlockInner";

const SidebarModuleBlock = (props) => {
  let [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen =()=>{
    setIsOpen(!isOpen)
  }
  let [lessonsList, setLessonsList]=useState({})

  useEffect(()=>{
    coursesAPI.lessons(props.courseId, props.moduleId).then(response=>{
      setLessonsList(lessonsList=response)
    })
  }, [lessonsList.check])

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
