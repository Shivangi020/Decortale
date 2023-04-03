import React from "react";
import "./review.css";
import { data } from "../../data";
import user from "../../images/people/people1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Review() {
  return (
    <div className="review-main">
      <h2>REVIEWS</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item,index) => {
          const { name, img } = item;
          return (
            <SwiperSlide className="re-main" key={index}>
              <div className="re-content">
                <div className="review">
                  <img className="re-img" src={img} alt={name}></img>
                  <p className="re-name">{name}</p>
                  <p className="re-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, suscipit Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, saepe!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Review;
