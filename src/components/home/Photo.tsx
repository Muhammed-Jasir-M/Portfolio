"use client";

import { home } from "@/constants/home";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="w-[298px] h-[298px] lg:w-[318px] lg:h-[318px] mix-blend-lighten"
      >
        <Image
          src={home.image}
          priority
          quality={100}
          fill
          alt={home.name}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
