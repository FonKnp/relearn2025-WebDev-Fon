import { createRoot } from "react-dom";
import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
