import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./CompanyLogos.css";

SwiperCore.use([Autoplay]);

const CompanyLogos = () => {
  return (
    <section id="company-logos" className="company-logos-section">
      <div className="container">
        <h2 className="text-center ">Our Partners</h2>
        <h2 className="text-center mb-5">Who we've Work with </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company1.png" alt="Company 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company2.png" alt="Company 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company-logo">
              <img src="/assets/company3.png" alt="Company 3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyLogos;
