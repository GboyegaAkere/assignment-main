/** @format */

import React from "react";
import { motion } from "framer-motion";
import ceo from "../images/ceo.png";
import Experience from "./Experience"; // Import the new Experience component

export function Hero() {
  return (
    <section className="bg-black text-white py-10 sm:py-5 mt-10 sm:mt-17">
      <motion.div
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
            {/* Top Row: SAM CREATES and Image */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* SAM CREATES */}
              <motion.div
                className="border border-gray-800 rounded-md p-6 sm:p-10 flex items-center justify-center text-center sm:text-left flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl sm:text-7xl font-bold">
                  <p className="text-start">SAM</p>
                  <p>CREATES</p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="border border-gray-800 rounded-md bg-neutral-900 overflow-hidden flex justify-center items-center sm:w-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={ceo}
                  alt="CEO"
                  className="w-full h-60 sm:h-60 object-cover rounded-md max-w-xs"
                />
              </motion.div>
            </div>

            {/* Bottom Row: About and Email */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* About */}
              <motion.div
                className="border border-gray-800 rounded-md p-4 sm:p-6 text-sm leading-relaxed flex-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p>
                  I'm Samkeet Mehta, a <strong>3D artist</strong>,{" "}
                  <strong>AR creator</strong>, and{" "}
                  <strong>graphic designer</strong> with a background in computer
                  engineering. I specialize in <strong>brand identity</strong>,{" "}
                  <strong>CGI marketing</strong>, and{" "}
                  <strong>augmented reality</strong>, with experience in social
                  media management, packaging design, and product animation. I've
                  worked on rebranding projects, XR presentations, and AR
                  healthcare concepts using Unity. Passionate about blending
                  creativity with technology, I strive to craft immersive digital
                  experiences that push the boundaries of design and storytelling.
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                className="border border-gray-800 rounded-md p-4 sm:p-6 bg-neutral-900 flex flex-col justify-between items-start flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full flex justify-between items-start h-60">
                  <p className="text-gray-400 text-sm">Wanna get in touch?</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L6.75 17.25M17.25 17.25V6.75H6.75"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:samkeetm@gmail.com"
                  className="text-white font-bold text-2xl sm:text-3xl mt-4"
                >
                  EMAIL ME
                </a>
              </motion.div>
            </div>
          </div>

          {/* Experience Component */}
         <Experience/>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
