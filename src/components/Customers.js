import yellowStar from "./yellowStar.png";

const Customers = (props) => {
  return (
    <div className="customers" style={{ border: props.border }}>
      <div className="customers-avatar">
        <img src={props.avatar} alt="avatar-one" />
      </div>
      <h3>{props.userName}</h3>
      <hr />
      <p>{props.text}</p>
      <div className="star-rating">
        <img src={yellowStar} alt="yellowStar" />
        <img src={yellowStar} alt="yellowStar" />
        <img src={yellowStar} alt="yellowStar" />
        <img src={yellowStar} alt="yellowStar" />
        <img src={yellowStar} alt="yellowStar" />
      </div>
    </div>
  );
};

export default Customers;
