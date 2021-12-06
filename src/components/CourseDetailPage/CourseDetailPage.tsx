import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import CourseDetailExperts from "../CourseDetailExperts/CourseDetailExperts";
import CourseDetailContent from "../CourseDetailInfo/CourseDetailContent";
import CourseDetailList from "../CourseDetailList/CourseDetailList";
import CourseDetailMore from "../CourseDetailMore/CourseDetailMore";
import CourseDetailPreview from "../CourseDetailPreview/CourseDetailPreview";

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
  const courses = useRequestData([store.coursesAPI.courses], []);

  let contentList;
  console.log(courseDetailData);
  if (courseDetailData) {
    contentList = courseDetailData.contentList.map((i, index) => (
      <CourseDetailContent key={index} title={i.title} text={i.text} />
    ));
  }

  return (
    <>
      <CourseDetailPreview
        linkVideo={courseDetailData.linkVideo}
        whatGive={courseDetailData.whatGive}
        howNeed={courseDetailData.howNeed}
      />

      <section className="cource__info">
        <h2 className="title">Информация</h2>
        {contentList}

        <CourseDetailList willLearnList={courseDetailData.willLearnList} />

        <CourseDetailExperts experts={courseDetailData.experts} />

        {courses && <CourseDetailMore courses={courses} />}
      </section>
    </>
  );
};
export default CourseDetailPage;
