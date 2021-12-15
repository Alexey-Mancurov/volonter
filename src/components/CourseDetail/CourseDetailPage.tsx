import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import CourseDetailExperts from "./CourseDetailExperts";
import CourseDetailContent from "../common/Title2AndBox";
import CourseDetailMore from "./CourseDetailMore";
import CourseDetailPreview from "./CourseDetailPreview";
import Title2AndList from "../common/Title2AndList/Title2AndList";
import s from "./index.module.css";


type TProps = {
  courseDetailData: {
    id: string | number;
    time: string;
    title: string;
    contentList: Array<{
      title: string;
      text: string;
    }>;
    description: string;
    willLearnList: { items: Array<string>; title: string };
    experts: Array<{ description: string; img: string; name: string }>;
    linkVideo: string;
    whatGive: Array<string>;
    howNeed: string;
  };
};

const CourseDetailPage: React.FC<TProps> = ({ courseDetailData }) => {
  const {
    title,
    contentList,
    willLearnList,
    experts,
    linkVideo,
    whatGive,
    howNeed,
  } = courseDetailData;
  const courses = useRequestData([store.coursesAPI.courses], []);

  let list;

  if (contentList) {
    list = contentList.map((i, index) => (
      <CourseDetailContent key={index} title={i.title} text={i.text} />
    ));
  }

  return (
    <>
      <CourseDetailPreview
        linkVideo={linkVideo}
        whatGive={whatGive}
        howNeed={howNeed}
      />

      <section className={s.info}>
        <h2 className="title">Информация</h2>
        {list}

        <Title2AndList title={title} list={willLearnList.items} />

        <CourseDetailExperts experts={experts} />

        {courses && <CourseDetailMore courses={courses} />}
      </section>
    </>
  );
};
export default CourseDetailPage;
