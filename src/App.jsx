import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <Pizza
        name="The Mediterranean Pizza"
        description="Spinach, Artichokes, Kalamata Olives, Sun-dried Tomatoes, Feta Cheese, Plum Tomatoes, Red Onions"
        image={"/public/pizzas/mediterraneo.webp"}
      />
      <Pizza
        name="The Mexicana Pizza"
        description="Tomatoes, Red Peppers, Jalapeno Peppers, Red Onions, Cilantro, Corn, Chipotle Sauce, Garlic"
        image={"/public/pizzas/mexicana.webp"}
      />
      <Pizza
        name="The Spinach Pesto Pizza"
        description="Spinach, Artichokes, Tomatoes, Sun-dried Tomatoes, Garlic, Pesto Sauce"
        image={"/public/pizzas/spin_pesto.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
