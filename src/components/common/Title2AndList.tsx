import ContentBoxCource from "./ContentBoxCource";
import CourceTitle2 from "./CourceTitle2";

type PropsType = {
  
  list: Array<string>;
  title: string;
  
};
const Title2AndList:React.FC<PropsType> = ({ title, list }) => {
  let visibleList;

  if (list) {
    visibleList = list.map((i, index) => (
      <li key={index} className="course__list-item cource__info-list-item">
        {i}
      </li>
    ));
  }

  return (
    <>
      <CourceTitle2 title={title} />
      <ContentBoxCource
        child={<ul className="cource__content-list">{visibleList}</ul>}
      />
    </>
  );
};

export default Title2AndList;
