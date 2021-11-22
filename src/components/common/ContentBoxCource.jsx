const ContentBoxCource = ({ child, addedClass }) => {
  return (
    <div className={`cource__content-box ${addedClass ? addedClass : ""}`}>
      {child}
    </div>
  );
};

export default ContentBoxCource;
