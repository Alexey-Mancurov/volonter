type PropsType = {
  num: string | number;
};
const NumInCircle:React.FC<PropsType> = ({ num }) => {
  return <div className="test__sidebar-num-int">{num}</div>;
};

export default NumInCircle;
