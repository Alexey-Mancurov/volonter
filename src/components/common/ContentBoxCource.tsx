type PropsType = {
  child: object ;
  addedClass?: string;
};
const ContentBoxCource: React.FC<PropsType> = ({ child, addedClass }) => {
  return (
    <div className={`cource__content-box ${addedClass ? addedClass : ""}`}>
      {child}
    </div>
  );
};

export default ContentBoxCource;
