import Customers from "./Customers";

import avatarOne from "./avatarOne.png";
import avatarTwo from "./avatarTwo.png";
import avatarThree from "./avatarThree.png";
import globeOne from "./worldGlobe1.png";
import globeTwo from "./worldGlobe2.png";

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
              <img className="globe" src={globeOne} />
              <Customers
                avatar={avatarOne}
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
              <img className="globe--two" src={globeTwo} />
              <Customers
                avatar={avatarTwo}
                userName="Jenny Wilson"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis accumsan
            felis bibendum convallis sodales"
                border="3px solid #DF314A"
              />
            </div>
            <div className="third-testinomy" data-aos-duration="1000">
              <Customers
                avatar={avatarThree}
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
