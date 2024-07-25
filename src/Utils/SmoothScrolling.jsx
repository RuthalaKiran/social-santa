import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;

// dont edit this file