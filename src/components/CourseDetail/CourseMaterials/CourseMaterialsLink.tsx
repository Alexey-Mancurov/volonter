import s from "./index.module.css";

type TProps = {
  text: string;
  link: string;
};

const CourseMaterialsLink:React.FC<TProps> = ({ text, link }) => {
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
