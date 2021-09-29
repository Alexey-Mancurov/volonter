import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import CourseInfoVideo from "./CourseInfoVideo";

const CourseInfo = (props) => {
  return (
    <div class="test__info">
      <CourseInfoVideo />
      <CourceInfoContent />
      {/* Тут еще слайдер добавить */}
    </div>
  );
};

export default CourseInfo