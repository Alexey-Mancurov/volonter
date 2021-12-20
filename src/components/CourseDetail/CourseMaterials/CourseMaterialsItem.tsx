import ContentBoxCource from "../../common/ContentBoxCource/ContentBoxCource";
import CourseMaterialsLink from "./CourseMaterialsLink";
import s from "./index.module.css";

type TProps = {
  title: string;
  materials: Array<{ text: string; link: string }>;
};

const CourseMaterialsItem: React.FC<TProps> = ({ title, materials }) => {
  const materialsList = () =>
    materials?.map((i, index) => (
      <CourseMaterialsLink key={index} text={i.text} link={i.link} />
    ));

  const materialsBox = materials && (
    <div className={s.inner}>{materialsList()}</div>
  );

  return (
    <ContentBoxCource
      addedClass={s.box}
      child={
        <>
          <div className={s.boxTitle}>{title}</div>
          {materialsBox}
        </>
      }
    />
  );
};
export default CourseMaterialsItem;
