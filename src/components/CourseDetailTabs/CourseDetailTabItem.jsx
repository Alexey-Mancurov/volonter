const CourseDetailTabItem =(props)=>{
    return <li className="tabs__item ">
    <div onClick={()=>{props.getPath(props.path); props.isActiveToggle(props.index)}} class={`tabs__link tabs__course-link ${props.isActive===true ? 'active' : ''}`}>
      {props.text}
    </div>
  </li>
}

export default CourseDetailTabItem