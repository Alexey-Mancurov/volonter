import s from './index.module.css'
import { FC } from "react";


interface PropsType  {
  action: (data: any) => void;
  data: string | number;
  child: object | string;
  baseValue?: string | number;
};
const LinkGrayUnderline: FC<PropsType> = ({
  action,
  data,
  child,
  baseValue,
}) => {
  return (
    <div
      className={s.favorit}
      onClick={() => {
        action(data);
      }}
    >
      {child || baseValue}
    </div>
  );
};

export default LinkGrayUnderline;
