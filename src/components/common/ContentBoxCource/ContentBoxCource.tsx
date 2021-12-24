import s from './index.module.css'
import { FC } from "react";


interface PropsType  {
  child: object ;
  addedClass?: string;
};
const ContentBoxCource: FC<PropsType> = ({ child, addedClass }) => {
  return (
    <div className={`${s.box} ${addedClass ? addedClass : ""}`}>
      {child}
    </div>
  );
};

export default ContentBoxCource;
