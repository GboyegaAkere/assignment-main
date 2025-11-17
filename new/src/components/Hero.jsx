/** @format */

import React from "react";
import { motion } from "framer-motion";
import ceo from "../images/pff.jpg";
import Experience from "./Experience";

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
      
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
           
            <div className="flex flex-col sm:flex-row gap-6">
             
              <motion.div
                className="border border-gray-800 rounded-md p-6 sm:p-10 flex items-center justify-center text-center sm:text-left flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl sm:text-7xl font-bold">
                  <p className="text-start">DEV</p>
                  <p>GBOYE</p>
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
   I'm Oluwagboyega, a <strong>full‑stack web developer</strong> with hands-on experience building responsive, high‑performance websites and web applications. I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), creating scalable solutions that combine clean UI/UX design with robust backend functionality.  
My expertise covers <strong>frontend development</strong>, <strong>API integration</strong>, <strong>database management</strong>, and <strong>SEO optimization</strong> to ensure fast‑loading, search‑friendly platforms.  
I have worked on diverse projects, from e‑commerce platforms and business dashboards to interactive portfolio sites, delivering user‑centered solutions that meet both client goals and technical standards. Passionate about technology, I aim to build innovative digital experiences that make an impact.

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
                <div className="w-full flex justify-between items-start h-40 sm:h-60">
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
                  href="mailto:gakeremale@gmail.com"
                  className="text-white font-bold text-2xl sm:text-3xl mt-4"
                >
                  EMAIL ME
                </a>
              </motion.div>
            </div>
          </div>

          {/* Experience Component */}
          <Experience />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
