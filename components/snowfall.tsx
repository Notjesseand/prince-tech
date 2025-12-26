import React from "react";

import "@/styles/star-background.css";

const Snowfall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="stars small"></div>
      <div className="stars medium"></div>
      <div className="stars large"></div>
    </div>
  );
};

export default Snowfall;
