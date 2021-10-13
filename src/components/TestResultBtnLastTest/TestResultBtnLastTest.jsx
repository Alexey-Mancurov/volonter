import { NavLink } from "react-router-dom"

const TestResultBtnLastTest = (props)=>{
    return <NavLink
    to={{
      pathname: "/test-completed",
      state: { completedResponse: props.completedResponse },
    }}
    className="test__ask-red test__ask-btn"
  >
    Смотреть результаты
  </NavLink>
}

export default TestResultBtnLastTest