const Customers = (props) => {
  return (
    <div className="customers" style={{ border: props.border }}>
      <div className="customers-avatar">
        <img src={`./images/${props.avatar}`} alt="avatar-one" />
      </div>
      <h3>{props.userName}</h3>
      <hr />
      <p>{props.text}</p>
      <div className="star-rating">
        <img src="./images/yellowStar.jpg" />
        <img src="./images/yellowStar.jpg" />
        <img src="./images/yellowStar.jpg" />
        <img src="./images/yellowStar.jpg" />
        <img src="./images/yellowStar.jpg" />
      </div>
    </div>
  );
};

export default Customers;
