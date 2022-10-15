import yellowStar from "./yellowStar.png";

const Tourism = (props) => {
  return (
    <div className="tourism" data-aos="flip-right" data-aos-duration="1000">
      <div className="tourism-center">
        <img style={{ width: "100%" }} src={props.image} alt="location" />
        <button>
          <h3>{props.cost}</h3>
        </button>
      </div>

      <h1>{props.center}</h1>
      <h5>{props.location}</h5>
      <div className="reviews">
        <img src={yellowStar} alt="yellowStar" />
        <h4>{props.rating}</h4>
        <p>{props.review} Review</p>
      </div>
    </div>
  );
};

export default Tourism;
