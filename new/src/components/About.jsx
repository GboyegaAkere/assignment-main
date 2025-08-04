import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full px-4 md:px-12 py-16 bg-black text-white">
      <motion.h2
        className="text-xl font-semibold italic mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT
      </motion.h2>

      <motion.div
        className="max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <p>
         I’m a passionate web developer 
         with 3 years of experience building modern, 
         high‑performance applications using the MERN stack. 
         I specialize in creating responsive, user‑friendly web solutions that blend functionality with great design. From developing robust back‑end systems to crafting engaging front‑end experiences, I deliver full‑stack applications that are scalable,
        efficient, and built to solve real‑world problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
