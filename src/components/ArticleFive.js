import Customers from "./Customers";

const ArticleFive = () => {
  return (
    <article>
      <div className="container">
        <div className="article-five" data-aos="zoom-out">
          <h1 data-aos="zoom-in" data-aos-duration="1000">
            What Our Customers Says About Us
          </h1>

          <div className="testinomy">
            <div
              className="worldGlobe"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img className="globe" src="./images/worldGlobe1.png" />
              <Customers
                avatar="avatarOne.png"
                userName="Devon Lane"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis accumsan
            felis bibendum convallis sodales"
                border="3px solid #52cf3d"
              />
            </div>
            <div
              className="worldGlobe"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img className="globe--two" src="./images/worldGlobe2.png" />
              <Customers
                avatar="avatarTwo.png"
                userName="Jenny Wilson"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis accumsan
            felis bibendum convallis sodales"
                border="3px solid #DF314A"
              />
            </div>
            <div className="third-testinomy" data-aos-duration="1000">
              <Customers
                avatar="avatarThree.png"
                userName="Robert Fox"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis accumsan
            felis bibendum convallis sodales"
                border="3px solid #42909C"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleFive;
