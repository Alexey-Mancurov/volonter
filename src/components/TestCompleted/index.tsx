import { NavLink } from "react-router-dom";
import Info from "./Info";
import Reviews from "./Reviews";
import { useLocation } from "react-router";
import s from './index.module.css'


type TProps ={
  title:string
}

const TestCompleted:React.FC<TProps> = ({title}) => {
  const location = useLocation();

  // @ts-ignore
  const completedResponse = location.state.completedResponse;

  return (
    <>
      <div className={s.wrapper}>
        <Info
          sertificate={completedResponse.sertificate}
          successAsks={completedResponse.successAsks}
          totalAsk={completedResponse.totalAsk}
        />
        <Reviews />
      </div>
      <div className={s.content}>
        <div className={s.title}>
          {completedResponse.content} {title}
        </div>
        <div className={s.text}>
          Самое время применить полученные знания на практике
        </div>
        <div className={s.text}>
          Выбирайте близкие вам по духу и интересам мероприятия и становитесь
          частью команды добра
        </div>
        <NavLink
          to={{
            pathname: "/test-checking",
            state: { completedResponse: completedResponse },
          }}
          className={s.btn}
        >
          Подробнее
        </NavLink>
      </div>
    </>
  );
};

export default TestCompleted;
