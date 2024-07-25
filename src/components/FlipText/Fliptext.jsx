import React from "react";
import "./Fliptext.css";
import { motion } from "framer-motion";

const Fliptext = ({ children }) => {
    const duration = 0.25;
    const stagger = 0.025;
  return (
    <motion.div className="filp-container" initial="initial" whileHover="hovered">
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Fliptext;
