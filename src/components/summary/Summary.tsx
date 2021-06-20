import Basket from "./Basket";

const Summary: React.FC = () => {
  return (
    <div className="summary-window rounded-grey-border">
      <h2>Summary</h2>
      <Basket />
      <button className="buy-button clickable">Buy now</button>
    </div>
  );
};

export default Summary;
