type PropsType = {
  numCurrent?: string | number;
  numAll?: string | number;
};

const NumFractionalInCircle: React.FC<PropsType> = ({ numCurrent, numAll }) => {
  return (
    <div className="test__sidebar-num">
      <p>
        <span>
          {numCurrent}/{numAll}
        </span>
      </p>
    </div>
  );
};

export default NumFractionalInCircle;
