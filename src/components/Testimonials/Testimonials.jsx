import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const testimonialsdata = [
    {
      id: 1,
      clientImg: assets.apartsectionimg1,
      clientReview:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi accusamus non laboriosam minus itaque earum eum, unde eligendi magnam. Dolorum rem voluptatum quidem! Soluta modi non quaerat facere inventore?",
      clientName: "Person name",
      clientProfesion: "profession",
    },
    {
      id: 2,
      clientImg: assets.apartsectionimg2,
      clientReview:
        "                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi accusamus non laboriosam minus itaque earum eum, unde eligendi magnam. Dolorum rem voluptatum quidem! Soluta modi non quaerat facere inventore?",
      clientName: "Person name",
      clientProfesion: "profession",
    },
    {
      id: 3,
      clientImg: assets.apartsectionimg3,
      clientReview:
        "                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi accusamus non laboriosam minus itaque earum eum, unde eligendi magnam. Dolorum rem voluptatum quidem! Soluta modi non quaerat facere inventore?",
      clientName: "Person name",
      clientProfesion: "profession",
    },
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonial-section-title">
        <p style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.02,
              stiffness: 50,
            }}
            className="testimonials-title"
          >
            Testimonials
          </motion.p>
        </p>
        <div className="navigate-buttons">
          <div className={`prev-button ${isBeginning ? "disabled" : ""}`}>
            <GrLinkPrevious />
          </div>
          <div className={`next-button ${isEnd ? "disabled" : ""}`}>
            <GrLinkNext />
          </div>
        </div>
      </div>
      <div className="testimonial-section-swiper">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
        >
          {testimonialsdata.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="client-swiper-child">
                  <div className="client-picture">
                    <img src={item.clientImg} alt="" />
                  </div>
                  <div className="client-review">
                    <div className="client-dtls">
                      <p>{item.clientName}</p>
                      <p>{item.clientProfesion}</p>
                    </div>
                    <div className="client-detailed-review">
                      {item.clientReview}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
