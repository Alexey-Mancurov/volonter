import ContentBoxCource from "./ContentBoxCource";
import CourceTitle2 from "./CourceTitle2";

type PropsType = {
  title: string;
  text: string;
};
const Title2AndBox = ({ title, text }: PropsType) => {
  return (
    <>
      <CourceTitle2 title={title} />
      <ContentBoxCource child={<p>{text}</p>} />
    </>
  );
};

export default Title2AndBox;
