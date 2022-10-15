import couples from "./couples.png";

const ArticleSix = () => {
  return (
    <article>
      <div className="container">
        <div
          className="article-six"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <img className="couples" src={couples} />
          <div className="article-six-text">
            <h1>
              Don't Miss The 50% Discount & Explore The Beauty Of The World
            </h1>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleSix;
