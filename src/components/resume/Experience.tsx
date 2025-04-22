"use client";

import { experience } from "@/constants/about";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "./CircleIcon";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  return (
    <div className="container mx-auto my-10" id="experience">
      <h2 className="text-3xl md:text-5xl font-bold text-center pt-5 mb-10">
        {experience.title}
      </h2>
      <div
        ref={containerRef}
        className="w-full md:w-[75%] mx-auto relative flex flex-col items-center justify-center"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
        />
        <div className="w-full flex flex-col items-start justify-between">
          {experience.items.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-[60%] mx-auto my-8 flex flex-col items-start md:items-center justify-between"
              >
                <CircleIcon />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="ml-16 md:ml-0 md:text-left"
                >
                  <h3 className="flex flex-col md:flex-row capitalize font-bold text-xl md:text-2xl">
                    {item.position}&nbsp;
                    <a
                      href={item.companyLink}
                      target="_blank"
                      className="text-accent capitalize"
                    >
                      @{item.company}
                    </a>
                  </h3>

                  <h4 className="capitalize font-medium text-white/80">
                    {item.duration}
                  </h4>

                  <p className="capitalize font-medium text-white/80">
                    {item.address}
                  </p>

                  <p className="font-medium w-full text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
