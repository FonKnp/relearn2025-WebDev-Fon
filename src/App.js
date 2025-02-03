const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  // debugger;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Please be working!"),
    React.createElement(Pizza, {
      name: "Pizza Margherita",
      description: "A classic pizza with tomatoes, mozzarella, and basil.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Prosciutto",
      description: "A pizza with tomatoes, mozzarella, and ham.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Funghi",
      description: "A pizza with tomatoes, mozzarella, and mushrooms.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Capricciosa",
      description:
        "A pizza with tomatoes, mozzarella, mushrooms, ham, and artichokes.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
