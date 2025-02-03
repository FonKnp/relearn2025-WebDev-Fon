const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img width="400" height="300" src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
