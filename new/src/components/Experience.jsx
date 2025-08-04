import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
  title: "MERN Stack Developer Intern",
  company: "Sabi programmers, Akure",
  date: "01 Feb, 2023 – 30th April, 2023",
  points: [
    "Developed and deployed full‑stack web applications using MongoDB, Express.js, React, and Node.js.",
    "Integrated secure user authentication with JWT and OAuth for client projects.",
    "Optimized backend APIs, reducing response time by 40%.",
    "Collaborated with the design team to create mobile‑first responsive interfaces.",
  ],
},
{
  title: "Frontend React Developer Tutor",
  company: "ZurielCademy, Akure",
  date: "01 Jun, 2023 – 31st August, 2024",
  points: [
    "Introduced students to the fundamentals of HTML, including semantic elements and proper structure.",
    "Taught CSS for styling, covering layouts, Flexbox, Grid, and responsive design principles.",
    "Guided learners through JavaScript basics, DOM manipulation, ES6+ features, and event handling.",
    "Transitioned students into React.js, explaining components, props, state, and hooks in detail.",
    "Led hands‑on projects where learners built complete websites starting from HTML/CSS to fully dynamic React applications.",
  ],
},

{
  title: "Full‑Stack Web Developer Intern",
  company: "Fiverr, ",
  date: "01 Oct, 2023 till date",
  points: [
    "Created e‑commerce platforms with product management, cart, and payment integrations using MERN stack.",
    "Built responsive UI layouts and dashboards with Tailwind CSS and Material UI.",
    "Set up and managed MongoDB Atlas for scalable database hosting.",
    "Deployed applications on Vercel and Render for production environments.",
  ],
}

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
