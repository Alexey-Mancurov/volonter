import s from './index.module.css'

type PropsType = {
  child: object ;
  addedClass?: string;
};
const ContentBoxCource: React.FC<PropsType> = ({ child, addedClass }) => {
  return (
    <div className={`${s.box} ${addedClass ? addedClass : ""}`}>
      {child}
    </div>
  );
};

export default ContentBoxCource;
