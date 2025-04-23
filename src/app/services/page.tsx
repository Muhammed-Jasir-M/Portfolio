"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group border border-white/20 rounded-lg p-4"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-accent-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-accent lg:text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
