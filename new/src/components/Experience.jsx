import React from "react";
import { motion } from "framer-motion";

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

const Experience = () => {
  return (
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
  );
};

export default Experience;
