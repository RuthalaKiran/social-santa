import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "../../assets/assets";

const Projects = () => {
  const projects = [
    {
      projectId: 1,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg1,
    },
    {
      projectId: 2,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg2,
    },
    {
      projectId: 3,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg3,
    },
    {
      projectId: 4,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg1,
    },
    {
      projectId: 5,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg2,
    },
    {
      projectId: 6,
      projectTitle: "Project name",
      projectDese: "project Description",
      projectImg: assets.apartsectionimg3,
    },
  ];

  const [width, setwidth] = useState(0);
  const carouselRef = useRef();
  const projectRef = useRef();

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    setwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const scaleProgress = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <motion.div
      ref={projectRef}
      style={{
        scale: scaleProgress,
        transition: ".2s",
      }}
      className="projects"
    >
      <div className="">
        <div className="project-section-title">
          <p>Featured</p>
          <div className="project-title-video-section">
            <div className="project-title-video">
              <video loop autoPlay={true} controls="" muted>
                <source src={assets.projectvid} type="video/mp4" />
              </video>
            </div>
            <p>Projects</p>
          </div>
        </div>
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          ref={carouselRef}
          className="projet-section-carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ scale: 0.9 }}
            className="project-section-inner-carousel"
          >
            {projects.map((item, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.03, transition: "0.4s" }}
                  key={index}
                  className="project-item"
                >
                  <div className="project-details">
                    <img src={item.projectImg} alt="" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        {/* <button></button> */}
      </div>
    </motion.div>
  );
};

export default Projects;
