import Card from "../Card";
import Basket from "./Basket";

const Summary: React.FC = () => {
  return (
    <Card title="Summary" className="summary-window">
      <Basket />
      <button className="buy-button clickable">Buy now</button>
    </Card>
  );
};

export default Summary;
