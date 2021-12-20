import CourceTitle2 from "../../common/CourceTitle2/CourceTitle2";
import CourseExpertItem from "./CourseExpertItem";
import s from "./index.module.css";

type PropsType = {
  experts: Array<{ description: string; img: string; name: string }>;
};

const CourseDetailExperts = ({ experts }: PropsType) => {
  const expertsList = () => {
    return experts?.map((i, index) => (
      <CourseExpertItem
        key={index}
        img={i.img}
        name={i.name}
        description={i.description}
      />
    ));
  };
  return (
    <>
      <CourceTitle2 title={"Эксперты"} />
      <div className={s.container}>{expertsList()}</div>
    </>
  );
};

export default CourseDetailExperts;
