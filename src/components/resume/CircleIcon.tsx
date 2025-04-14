"use client";

import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

const CircleIcon = ({}) => {
  const circleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["center end", "center center"],
  });

  return (
    <figure ref={circleRef} className="absolute left-0 stroke-white/50 ">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-accent stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-[5px] fill-black"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse stroke-1 fill-accent"
        />
      </svg>
    </figure>
  );
};

export default CircleIcon;
