import Tourism from "./Tourism";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import imageOne from "./image1.png";
import imageTwo from "./image2.png";
import imageThree from "./image3.png";
import imageFour from "./image4.png";
import imageFive from "./image5.png";
import imageSix from "./image6.png";

const ArticleThree = () => {
  return (
    <article>
      <div className="container">
        <div className="article-three">
          <div
            className="article-three-header"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 style={{ color: "#E30C28" }}>POPULAR DESTINATION</h4>
            <h1>Explore Popular Destination</h1>
          </div>
          <Swiper
            // install Swiper modules
            className="swiper"
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Tourism
                image={imageOne}
                cost="$200"
                center="Great Wall Of China"
                location="Beijing, China"
                rating="4.5"
                review="2.2k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageTwo}
                cost="$400"
                center="Louvre Museum"
                location="Paris, Ile-de-France, Franceosia"
                rating="4.5"
                review="1.6k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageThree}
                cost="$540"
                center="Safdarjung Tomb"
                location="New Delhi, DL, India"
                rating="4.5"
                review="3.6k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageFour}
                cost="$720"
                center="Anitkabir Monument"
                location="Ankara, Turkey"
                rating="4.5"
                review="4k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageFive}
                cost="$350"
                center="Trevi Fountain"
                location="Roma, Lazio, Italy"
                rating="4.5"
                review="5.2k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageSix}
                cost="$840"
                center="Brown Concrete Tower"
                location="Mexico City, CDMX Mexico"
                rating="4.5"
                review="1.2k"
              />
            </SwiperSlide>
          </Swiper>
          <div className="tour-desktop">
            <Tourism
              image={imageOne}
              cost="$200"
              center="Great Wall Of China"
              location="Beijing, China"
              rating="4.5"
              review="2.2k"
            />
            <Tourism
              image={imageTwo}
              cost="$400"
              center="Louvre Museum"
              location="Paris, Ile-de-France, Franceosia"
              rating="4.5"
              review="1.6k"
            />
            <Tourism
              image={imageThree}
              cost="$540"
              center="Safdarjung Tomb"
              location="New Delhi, DL, India"
              rating="4.5"
              review="3.6k"
            />
            <Tourism
              image={imageFour}
              cost="$720"
              center="Anitkabir Monument"
              location="Ankara, Turkey"
              rating="4.5"
              review="4k"
            />
            <Tourism
              image={imageFive}
              cost="$350"
              center="Trevi Fountain"
              location="Roma, Lazio, Italy"
              rating="4.5"
              review="5.2k"
            />
            <Tourism
              image={imageSix}
              cost="$840"
              center="Brown Concrete Tower"
              location="Mexico City, CDMX Mexico"
              rating="4.5"
              review="1.2k"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleThree;
