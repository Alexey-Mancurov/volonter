import NumFractionalInCircle from "../common/NumFractionalInCircle";
import NumInCircle from "../common/NumInCircle";

const BaseData = ({ num, title, numCurrent, numAll, isFractional }) => {
  return (
    <div className="test__sidebar-box">
      {isFractional ? (
        <NumFractionalInCircle numCurrent={numCurrent} numAll={numAll} />
      ) : (
        <NumInCircle num={num} />
      )}
      <div className="test__sidebar-title">{title}</div>
    </div>
  );
};

export default BaseData;
