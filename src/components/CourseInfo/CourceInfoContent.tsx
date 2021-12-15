import paper from "../../assets/paper.svg";
import ListContent from "../common/ListContent";
import s from "./index.module.css";

type TProps = {
  title: string;
  description: string;
  info: Array<string>;
  linkVideo: string;
};

const CourceInfoContent: React.FC<TProps> = ({
  title,
  description,
  info,
  linkVideo,
}) => {

  return (
    <div className={s.content}>
      <div className={s.contentBox}>
        {description && <p className={s.briefly}>{description}</p>}
        <ListContent list={info} />
      </div>
      <div className={s.dataBox}>
        <p className={s.subtitle}>Желаем интересного просмотра</p>
        <div className={s.data}>
          <div className={s.box}>
            <img className={s.img} src={paper} alt=""></img>
          </div>
          <div className={s.dataContainer}>
            <div className={s.dataText}>{title}</div>
            <a
              href={linkVideo}
              className={s.dataLink}
              target="_blank"
              rel="noreferrer"
            >
              Смотреть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceInfoContent;
