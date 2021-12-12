type PropsType = {
  title: string;
};
const CourceTitle2:React.FC<PropsType> = ({ title }) => {
  return <p className="cource__title-2">{title}</p>;
};

export default CourceTitle2;
