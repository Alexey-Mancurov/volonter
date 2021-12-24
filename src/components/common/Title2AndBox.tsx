import { FC } from "react";
import ContentBoxCource from "./ContentBoxCource/ContentBoxCource";
import CourceTitle2 from "./CourceTitle2/CourceTitle2";

interface PropsType {
  title: string;
  text: string;
};
const Title2AndBox:FC<PropsType> = ({ title, text }) => {
  return (
    <>
      <CourceTitle2 title={title} />
      <ContentBoxCource child={<p>{text}</p>} />
    </>
  );
};

export default Title2AndBox;
