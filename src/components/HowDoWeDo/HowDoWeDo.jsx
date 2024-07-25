import React, { useEffect, useRef, useState } from "react";
import "./HowDoWeDo.css";
import { hoDoWeDoSwipercontent } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

// icons
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineImageSearch } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { TbScreenShare } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const howDoWeDoSwiperButtons = [
  {
    buttonId: 0,
    buttonImg: <FaChalkboardTeacher />,
    buttonTitle: "Uncover your brand story through workshops.",
  },
  {
    buttonId: 1,
    buttonImg: <TbScreenShare />,
    buttonTitle: "Craft captivating narratives that connect",
  },
  {
    buttonId: 2,
    buttonImg: <FaChartLine />,
    buttonTitle: "Develop data-driven strategies for targeted channels.",
  },
  {
    buttonId: 3,
    buttonImg: <TbGraph />,
    buttonTitle: "Track, analyze, and optimize for continuous improvement.",
  },
  {
    buttonId: 4,
    buttonImg: <MdOutlineVideoCameraBack />,
    buttonTitle: "Create high-quality, engaging content for maximum impact.",
  },
  {
    buttonId: 5,
    buttonImg: <MdOutlineContentPasteSearch />,
    buttonTitle: "Analyse data and give detailed insights",
  },
];

const HowDoWeDo = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", updateActiveIndex);
    }
  }, []);

  const updateActiveIndex = () => {
    if (swiperRef.current) {
      setactiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const handleswiperbutton = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="how-do-we-do-section">
      <div className="howdowedo-section-title">
        <p>How Do</p>
        <p>We Do?</p>
      </div>
      <div className="buttons-container">
        {howDoWeDoSwiperButtons.map((button, index) => {
          return (
            <div
              key={index}
              onClick={() => handleswiperbutton(button.buttonId)}
              className={`swiper-buttons ${
                activeIndex === button.buttonId ? "button-active" : ""
              }`}
            >
              <div className="swiper-button-title">{button.buttonTitle}</div>
              <div className="swiper-button-round">
                <div className="swiper-button-inner-round">
                  {button.buttonImg}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Swiper
        ref={swiperRef}
        className="hodowedo-swiper-main"
        modules={[Navigation, Pagination]}
        // pagination={{
        //   clickable: true,
        //   el: ".swiper-pagination-container",
        //   bulletClass: "swiper-pagination-bullet",
        //   bulletActiveClass: "swiper-pagination-buliet-active",
        // }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        {hoDoWeDoSwipercontent.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="howdowedo-swiper-child">
                <div className="howdowedo-swiper-content">
                  <p className="howdowedo-swiper-content-title">
                    {item.swipercontentTitle}
                  </p>
                  <p className="howdowedo-swiper-content-description">
                    {item.swipercontentDesc}
                  </p>
                  <p>In this phase, we :</p>
                  <div className="howdowedo-swiper-content-points">
                    {item.swipercontentPoints.map((point, index) => {
                      return (
                        <div key={index}>
                          <div className="points-arrow-icon">
                            {" "}
                            <BiSolidRightArrow />
                          </div>
                          <p>{point}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="howdowedo-swiper-image">
                  <img src={item.swipercontentImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HowDoWeDo;
