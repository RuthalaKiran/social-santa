import React, { useRef, useState } from "react";
import "./ApartSection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { assets } from "../../assets/assets";

const ApartSection = () => {
  const [mousepposition, setmouseposition] = useState({ x: 0, y: 0 });
  window.addEventListener("mousemove", (e) => {
    setmouseposition({ x: e.clientX, y: e.clientY });
  });

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [initialx, setinitialx] = useState(0);

  const xTo1 = useRef();
  const yTo1 = useRef();
  const xTo2 = useRef();
  const yTo2 = useRef();
  const xTo3 = useRef();
  const yTo3 = useRef();

  const firstcontainer = useRef();
  const secondcontainer = useRef();
  const thirdcontainer = useRef();

  //  first container
  const { contextSafe: contextsafe1 } = useGSAP(
    () => {
      (xTo1.current = gsap.quickTo(".apart-image-1", "x", {
        duration: 0.5,
        ease: "power4.out",
        rotate: initialx > 640 ? 20 : -20,
      })),
        (yTo1.current = gsap.quickTo(".apart-image-1", "y", {
          duration: 0.5,
          ease: "power4.out",
        }));
    },
    { scope: firstcontainer, dependencies: [initialx] }
  );

  // second container
  const { contextSafe: contextsafe2 } = useGSAP(
    () => {
      (xTo2.current = gsap.quickTo(".apart-image-2", "x", {
        duration: 0.5,
        ease: "power4.out",
        rotate: initialx > 640 ? 20 : -20,
      })),
        (yTo2.current = gsap.quickTo(".apart-image-2", "y", {
          duration: 0.5,
          ease: "power4.out",
        }));
    },
    { scope: secondcontainer, dependencies: [initialx] }
  );

  // third container
  const { contextSafe: contextsafe3 } = useGSAP(
    () => {
      (xTo3.current = gsap.quickTo(".apart-image-3", "x", {
        duration: 0.5,
        ease: "power4.out",
        rotate: initialx > 640 ? 20 : -20,
      })),
        (yTo3.current = gsap.quickTo(".apart-image-3", "y", {
          duration: 0.5,
          ease: "power4.out",
        }));
    },
    { scope: thirdcontainer, dependencies: [initialx] }
  );

  const moveshape1 = contextsafe1((e) => {
    xTo1.current(e.clientX);
    yTo1.current(e.clientY);
    setinitialx(e.clientX);
  });
  const moveshape2 = contextsafe2((e) => {
    xTo2.current(e.clientX);
    yTo2.current(e.clientY);
    setinitialx(e.clientX);
  });
  const moveshape3 = contextsafe3((e) => {
    xTo3.current(e.clientX);
    yTo3.current(e.clientY);
    setinitialx(e.clientX);
  });

  return (
    <div className="apartsection">
      <div className="apart-section-title">
        <p>What Sets</p>
        <p>Us Apart?</p>
      </div>

      <div className="apart-section-container">
        <div className="layer1">
          <div
            ref={firstcontainer}
            onMouseMove={(e) => {
              moveshape1(e);
              console.log("mouse moved over first image");
            }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            className={`apart-section-child-container ${
              isHovered1 ? "change-color" : ""
            } `}
          >
            <div className="left-child">
              <span>01/</span>
              <p>Social Touch</p>
            </div>
            <div className="right-child">
              <p className={`${isHovered1 ? "show-content" : "hide-content"}`}>
                Our team crafts compelling narratives that capture your brand’s
                essence and connect emotionally with your audience.
              </p>
            </div>
            <img
              src={assets.apartsectionimg1}
              className={`apartsection-image apart-image-1 ${
                isHovered1
                  ? "social-touch-image-show"
                  : "social-touch-image-hide"
              } `}
              style={{
                transform: `translate(${mousepposition.x}px,${mousepposition.y}px)`,
              }}
              alt=""
            />
          </div>
        </div>

        <div
          className={`apartsection-hr-line ${
            isHovered1 ? "animate-apartsection-hr" : ""
          } `}
        />

        <div className="layer2">
          <div
            ref={secondcontainer}
            onMouseMove={(e) => {
              moveshape2(e);
              console.log("mouse moved");
            }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className={`apart-section-child-container ${
              isHovered2 ? "change-color" : ""
            } `}
          >
            <div className="left-child">
              <span>02/</span>
              <p>Power of Santa</p>
            </div>
            <div className="right-child">
              <p className={`${isHovered2 ? "show-content" : "hide-content"}`}>
                We turn these stories into impactful digital experiences across
                all platforms. From social media campaigns to SEO, our expertise
                ensures your message reaches the right people at the right time.
              </p>
            </div>
            <img
              src={assets.apartsectionimg2}
              className={`apartsection-image apart-image-2 ${
                isHovered2
                  ? "social-touch-image-show"
                  : "social-touch-image-hide"
              } `}
              style={{
                transform: `translate(${mousepposition.x}px,${mousepposition.y}px)`,
              }}
              alt=""
            />
          </div>
        </div>

        <div
          className={`apartsection-hr-line ${
            isHovered2 ? "animate-apartsection-hr" : ""
          } `}
        />

        <div className="layer3">
          <div
            ref={thirdcontainer}
            onMouseMove={(e) => {
              moveshape3(e);
              console.log("mouse moved");
            }}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className={`apart-section-child-container ${
              isHovered3 ? "change-color" : ""
            } `}
          >
            <div className="left-child">
              <span>03/</span>
              <p>Collaborative Approach</p>
            </div>
            <div className="right-child">
              <p className={`${isHovered3 ? "show-content" : "hide-content"}`}>
                We foster strong partnerships with our clients. Through open
                communication and understanding your goals, we develop tailored
                digital marketing strategies that deliver measurable success.
              </p>
            </div>
            <img
              src={assets.apartsectionimg3}
              className={`apartsection-image apart-image-3 ${
                isHovered3
                  ? "social-touch-image-show"
                  : "social-touch-image-hide"
              } `}
              style={{
                transform: `translate(${mousepposition.x}px,${mousepposition.y}px)`,
              }}
              alt=""
            />
          </div>
        </div>

        <div
          className={`apartsection-hr-line ${
            isHovered3 ? "animate-apartsection-hr" : ""
          } `}
        />
      </div>
    </div>
  );
};

export default ApartSection;
