type PropsType = {
  link: string | undefined;
  addedClass: string;
};

const IframeYoutube: React.FC<PropsType> = ({ link, addedClass }) => {
  return (
    <div className={`${addedClass ? addedClass : ""}`}>
      <iframe
        width="587px"
        height="332px"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeYoutube;
