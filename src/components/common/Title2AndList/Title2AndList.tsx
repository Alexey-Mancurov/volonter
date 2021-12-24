import ContentBoxCource from "../ContentBoxCource/ContentBoxCource";
import CourceTitle2 from "../CourceTitle2/CourceTitle2";
import s from "./index.module.css";
import { FC } from "react";

interface PropsType  {
  list: Array<string>;
  title: string;
};
const Title2AndList: FC<PropsType> = ({ title, list }) => {
  const visibleList = () => {
    return list?.map((i, index) => (
      <li key={index} className={s.item}>
        {i}
      </li>
    ));
  };

  return (
    <>
      <CourceTitle2 title={title} />
      <ContentBoxCource child={<ul className={s.list}>{visibleList()}</ul>} />
    </>
  );
};

export default Title2AndList;
