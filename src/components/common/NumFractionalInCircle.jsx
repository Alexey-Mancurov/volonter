const NumFractionalInCircle = ({ numCurrent, numAll }) => {
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
