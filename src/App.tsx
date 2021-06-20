import Summary from "./components/summary/Summary";
import Specifications from "./components/specifications/Specifications";
import { useAppData } from "./hooks/useAppData";

function App() {
  const [isLoading, hasError, data] = useAppData();

  if (isLoading) {
    return <p className="flex-center">Loading ...</p>;
  }

  if (hasError) {
    return <p className="flex-center">Error</p>;
  }

  if (data) {
    return (
      <>
        <div className="header">
          <h1>Laptop customisation tool</h1>
        </div>
        <div className="content">
          <Specifications categories={data.categories} />
          <Summary />
        </div>
        i{" "}
      </>
    );
  }

  return null;
}

export default App;
