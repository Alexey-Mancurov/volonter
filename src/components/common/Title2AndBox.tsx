import { FC } from "react";
import ContentBoxCource from "./ContentBoxCource/ContentBoxCource";
import CourceTitle2 from "./CourceTitle2/CourceTitle2";

interface PropsType {
  title: string;
  text: string | Array<string>;
};
const Title2AndBox:FC<PropsType> = ({ title, text }) => {
  let listText
  if(typeof text === 'object'){
    listText = text.map(i=><p>{i}</p>)
  }
  return (
    <>
      <CourceTitle2 title={title} />
      {listText
      ? <ContentBoxCource child={listText} />
      :<ContentBoxCource child={<p>{text}</p>} />
      }
      
    </>
  );
};

export default Title2AndBox;
