type TProps = {
  ask: string;
  currentAsk: number | string;
  askCount: number | string;
};

const Header:React.FC<TProps> = ({ ask, currentAsk, askCount }) => {
  return (
    <div className="test__container-wrapper self-start">
      <div className="test__content-title">{ask}</div>
      <div className="test__completed-result">
        {currentAsk}/{askCount}
      </div>
    </div>
  );
};

export default Header;