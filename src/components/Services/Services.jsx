import React, { useRef } from "react";
import "./Services.css";
import { GoArrowUpRight } from "react-icons/go";
import { animate, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const dragref = useRef(null);
  const fadevarients = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
      },
    }),
  };

  const service = [
    {
      serviceId: 1,
      serviceTitle: "Social Media Marketing",
      serviceDesc:
        "Boost your online presence with engaging strategies tailored for each social platform.",
    },
    {
      serviceId: 2,
      serviceTitle: "Business Stater Kit",
      serviceDesc:
        "Start your business with essential branding, online setup, and initial marketing campaigns.",
    },
    {
      serviceId: 3,
      serviceTitle: "Influencer Marketing",
      serviceDesc:
        "Expand your reach through strategic partnerships with influential figures.",
    },
    {
      serviceId: 4,
      serviceTitle: "Performance Marketing",
      serviceDesc:
        "Maximize ROI with data-driven PPC, conversion optimization, and detailed analytics",
    },
    {
      serviceId: 5,
      serviceTitle: "Website Development",
      serviceDesc:
        "Develop a compelling and functional website designed to attract and retain visitors.",
    },
  ];
  return (
    <div className="services">
      <div className="services-mask">
        <div className="services-section-title">
          <p>Our</p>
          <p>Services</p>
        </div>
        <div ref={dragref} className="services-section-services">
          <motion.div className="services-container">
            {service.map((service, index) => {
              return (
                <motion.div
                  drag
                  dragConstraints={dragref}
                  dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                  variants={fadevarients}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="service-items"
                >
                  <Tilt
                    perspective={5000}
                    tiltReverse={false}
                    className="tilt-services"
                  >
                    <motion.div
                      initial="initial"
                      whileHover="hovered"
                      key={index}
                      className="service-item"
                    >
                      <motion.div className="service-icon">
                        <motion.span
                          variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                          }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                          }}
                        >
                          {" "}
                          <GoArrowUpRight />
                        </motion.span>
                        <motion.span
                          variants={{
                            initial: {
                              y: "100%",
                              rotate: "50deg",
                              backgroundColor: "white",
                            },
                            hovered: {
                              y: 0,
                              rotate: "46deg",
                              backgroundColor: "black",
                            },
                          }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.3,
                          }}
                        >
                          <GoArrowUpRight />
                        </motion.span>
                      </motion.div>
                      <div className="service-content">
                        <div className="service-title">
                          {service.serviceTitle}
                        </div>
                        <div className="service-description">
                          {service.serviceDesc}
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
