import ContentBoxCource from "../common/ContentBoxCource";
import CourseMaterialsLink from "./CourseMaterialsLink";

type TProps = {
  title: string;
  materials: Array<{ text: string; link: string }>;
};

const CourseMaterialsItem: React.FC<TProps> = ({ title, materials }) => {
  let materialsList;
  if (materials) {
    materialsList = materials.map((i, index) => (
      <CourseMaterialsLink key={index} text={i.text} link={i.link} />
    ));
  }

  const materialsBox = materials && (
    <div className="course__inside-inner">{materialsList}</div>
  );

  return (
    <ContentBoxCource
      addedClass={"course__inside-box"}
      child={
        <>
          <div className="course__inside-box-title">{title}</div>
          {materialsBox}
        </>
      }
    />
  );
};
export default CourseMaterialsItem;
