import star from "./star.jpg";

const ArticleFour = () => {
  return (
    <article>
      <div className="container">
        <div className="article-four" id="article-four">
          <div
            className="female-guide"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              className="female-traveller"
              style={{ width: "100%" }}
              src="./images/femaleTour.jpg
            "
              alt="female-guide"
            />
            <div className="verified">
              <img src="./images/mark.png" />
              <h2>100%</h2>
              <p>Verified</p>
            </div>
            <div className="experiences">
              <h5>How was your Experiences</h5>
              <div className="emoji">
                <img src="./images/inlove-face.png" />
                <img src="./images/smile-face.png" />
                <img src="./images/confused-face.png" />
                <img src="./images/angry-face.png" />
              </div>
            </div>
            <img src={star} className="redStar1" />
            <img src={star} className="redStar2" />
          </div>
          <div
            className="aboutUs"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h3 style={{ color: "#db021c" }}>ABOUT US</h3>
            <h1>With Our Experience We Serve You Better</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
              feugiat turpis sollicitudin posuere sem rutrum magna. Nisi,
              convallis nisl sed volutpat dolor, massa.
            </p>
            <div className="years-experiences">
              <div data-aos="flip-left" data-aos-duration="1000">
                <h1>15+</h1>
                <p>Years Experience</p>
              </div>
              <div data-aos="flip-up" data-aos-duration="1000">
                <h1>320k+</h1>
                <p>Successful Trip</p>
              </div>
              <div data-aos="flip-down" data-aos-duration="1000">
                <h1>40k+</h1>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleFour;
