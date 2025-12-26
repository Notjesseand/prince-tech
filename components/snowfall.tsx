// "use client";
// import React from "react";
// import { motion } from "framer-motion";
import "@/styles/star-background.css";

// const Snowfall = () => {
//   // Create an array of 30 snowflakes with random properties
//   const snowflakes = Array.from({ length: 30 }).map((_, i) => ({
//     id: i,
//     size: Math.random() * 5 + 2, // Sizes between 2px and 7px
//     left: Math.random() * 100, // Random horizontal position (0-100%)
//     duration: Math.random() * 10 + 10, // Fall duration (10-20 seconds)
//     delay: Math.random() * 10, // Random start delay
//     drift: Math.random() * 40 - 20, // Horizontal drift amount
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
//       {snowflakes.map((flake) => (
//         <motion.div
//           key={flake.id}
//           className="absolute bg-white rounded-full opacity-40 shadow-[0_0_8px_white]"
//           style={{
//             width: flake.size,
//             height: flake.size,
//             left: `${flake.left}%`,
//             top: "-10px",
//           }}
//           animate={{
//             y: ["0vh", "110vh"],
//             x: [0, flake.drift, 0],
//           }}
//           transition={{
//             y: {
//               duration: flake.duration,
//               repeat: Infinity,
//               ease: "linear",
//               delay: flake.delay,
//             },
//             x: {
//               duration: flake.duration / 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Snowfall;

import React from "react";

const Snowfall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      <div className="stars small"></div>
      <div className="stars medium"></div>
      <div className="stars large"></div>
    </div>
  );
};

export default Snowfall;
