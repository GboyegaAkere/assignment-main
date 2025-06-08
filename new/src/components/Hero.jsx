/** @format */

import React from "react";
import { motion } from "framer-motion";
import ceo from "../images/ceo.png";

const experiences = [
  {
    title: "AR Developer & 3D Artist Intern",
    company: "Arexa, Mumbai",
    date: "01 May, 2024 – 31st July, 2024",
    points: [
      "Development of the AR, VR, MR & CGI Projects.",
      "Development of the 3D Models & XR experiences for clients.",
      "Collaboratively worked with the team.",
      "Worked closely on Asset Development.",
    ],
  },
 
  {
    title: "Creative Design Intern",
    company: "Humane Space, Mumbai",
    date: "01 Oct, 2024 – 31st December, 2024",
    points: [
      "Designed market-focused packaging for the brand Maadico, improving product appeal.",
      "Created interactive 3D models for the agency’s website to enhance user engagement.",
      "Developed impactful presentation decks for XR meetups to showcase innovative ideas.",
    ],
  },
  {
    title: "AR Developer & 3D Artist Intern",
    company: "Arexa, Mumbai",
    date: "01 May, 2024 – 31st July, 2024",
    points: [
      "Development of the AR, VR, MR & CGI Projects.",
      "Development of the 3D Models & XR experiences for clients.",
      "Collaboratively worked with the team.",
      "Worked closely on Asset Development.",
    ],
  },
  
  {
    title: "Creative Design Intern",
    company: "Treblel, Mumbai",
    date: "01 Jan, 2025 – 21st February, 2025",
    points: [
      "Assisted in motion projects, focusing on logo typography, color theory and visual identity.",
      "Designed posters, wallpapers, frames, and social media posts for various client brands.",
      "Applied design principles to create visually appealing and effective marketing materials.",
      "Collaborated with the design team to develop creative concepts aligned with client needs.",
    ],
  },
];

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
                <div className="text-5xl sm:text-7xl font-bold leading-tight">
                  <p>SAM</p>
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
                  className="w-full h-48 sm:h-auto object-cover rounded-md max-w-xs"
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
                {/* Top Row: Left Text + Right Icon */}
                <div className="w-full flex justify-between items-start">
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

                {/* Email Link */}
                <a
                  href="mailto:samkeetm@gmail.com"
                  className="text-white font-bold text-2xl sm:text-3xl mt-4"
                >
                  EMAIL ME
                </a>
              </motion.div>
            </div>
          </div>

          {/* Experience Card */}
          <motion.div
            className="border border-gray-800 rounded-md bg-[#0a0a0a] h-[600px] sm:h-[640px] max-h-[640px] p-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-bold border-b border-gray-700 pb-2 mb-3">
              EXPERIENCE
            </h2>
            <div className="flex-1 space-y-4 pr-1">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold">{exp.title}</h3>
                  <p className="text-xs text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.date}</p>
                  <ul className="list-disc ml-4 mt-1 text-xs text-gray-300 space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
