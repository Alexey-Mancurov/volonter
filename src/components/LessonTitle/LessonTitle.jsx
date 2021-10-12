const LessonTitle = (props)=>{

    if(!props.title){
        return <h1 className="title title-course">ОШИБКА получения заголовка кусра</h1>
    }
    return <h1 className="title title-course">{props.title}</h1>
}



export default LessonTitle