"use client";
import { motion } from "framer-motion";
import { contactInfo } from "@/constants/contact";
import ContactForm from "@/components/contact/ContactForm";
import Social from "@/components/home/Socials";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="pt-10 pb-14"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <ContactForm />

          <div className="flex-1 flex flex-col gap-10 items-center justify-center order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <a
                    href={item.href}
                    className="flex items-center gap-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-primary-foreground text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <Social />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
