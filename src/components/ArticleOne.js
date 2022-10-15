import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import star from "./star.png";
import explorer from "./explorer.png";
import arrow from "./arrow.jpg";
import security from "./security.jpg";
import aeroplane from "./aeroplane.png";
import aeroplanefumes from "./aeroplane-fumes.png";

const ArticleOne = () => {
  return (
    <article>
      <div className="container">
        <div
          className="article-one"
          id="article-one"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="article-one-content">
            <div className="article-one--h1">
              <h1>
                NEVER STOP <span>EXPLORING</span> THE WORLD{" "}
                <FontAwesomeIcon
                  style={{ color: "#db021c" }}
                  icon={faEarthAmerica}
                />
              </h1>
              <img src={star} className="star-one" alt="star-one" />
              <img src={star} className="star-two" alt="star-two" />
              <img src={star} className="star-three" alt="star-three" />
              <img className="aeroplane" src={aeroplane} alt="aeroplane" />
              <img
                className="aeroplane-fumes"
                src={aeroplanefumes}
                alt="aeroplane"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla adipiscing lobortis id. Neque nisi, orci ante risus
              tortor pellentesque dolor.
            </p>
            <div className="explore-now">
              <div className="user-details">
                <div className="location">
                  <div>
                    Location <img src={arrow} />
                  </div>
                  <p>Italian</p>
                </div>
                <div className="date">
                  <div>
                    {" "}
                    Date <img src={arrow} />
                  </div>
                  <p>Tue, 3 Nov</p>
                </div>
                <div className="price">
                  <div>
                    Average Price
                    <img src={arrow} />
                  </div>
                  <p>$400 - $600</p>
                </div>
              </div>
              <button>Explore Now</button>
              <img src={star} className="exploreStar-one" alt="star-one" />
              <img src={star} className="exploreStar-two" alt="star-two" />
            </div>
          </div>
          <div
            className="article-one-explorer"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <img src={star} className="travel-star-one" alt="star-three" />
            <img src={star} className="travel-star-two" alt="star-three" />
            <img className="explorer" src={explorer} alt="explorer" />
            <div className="explorer-security">
              <img src={security} alt="security" />
              <div>
                <h3>24/7</h3>
                <p>Ensure security</p>
              </div>
            </div>
            <div className="explorer-support">
              <div className="support-circle">
                <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
              </div>
              <div>
                <h3>24/7</h3>
                <p>Guide Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleOne;
