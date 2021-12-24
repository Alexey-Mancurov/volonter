import s from "./index.module.css";
import { FC } from "react";

interface TProps {
  text: string;
  link: string;
};

const CourseMaterialsLink:FC<TProps> = ({ text, link }) => {
  return (
    <>
      <div className={s.item}>
        <p className={s.itemTitle}>{text}</p>
        <a className={s.download} href={link} download>
          Скачать
        </a>
      </div>
    </>
  );
};

export default CourseMaterialsLink;
