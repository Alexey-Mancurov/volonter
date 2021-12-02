type PropsType = {
  action: (data: any) => void;
  data: string | number;
  child: object | string;
  baseValue?: string | number;
};
const LinkGrayUnderline: React.FC<PropsType> = ({
  action,
  data,
  child,
  baseValue,
}) => {
  return (
    <div
      className={`course__header-favorit`}
      onClick={() => {
        action(data);
      }}
    >
      {child || baseValue}
    </div>
  );
};

export default LinkGrayUnderline;
