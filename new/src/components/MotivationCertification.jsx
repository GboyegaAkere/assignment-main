import { motion } from "framer-motion";

const MotivationCertification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between gap-6"
    >
      {/* Motivation */}
      <div className="bg-neutral-900 rounded-xl p-6 shadow-md flex-grow overflow-auto">
        <h2 className="text-3xl font-bold text-white mb-4">MOTIVATION</h2>
        <p className="text-sm text-neutral-300 leading-relaxed">
           Driven by a passion for building impactful digital solutions, I find motivation in solving complex problems and turning ideas into functional, user‑friendly applications. 
  Every line of code, every design choice, and every interaction is an opportunity to create something meaningful. 
  I thrive on learning new technologies, improving my skills, and pushing the limits of what’s possible on the web. 
  For me, each project is more than just development—it’s a chance to craft experiences that are efficient, accessible, and built to last.
        </p>
        <p className="mt-4 italic text-neutral-500">Oluwagboyega</p>
      </div>

      {/* Certifications */}
     <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-900 rounded-xl p-6 shadow-md min-h-[300px]"
          >
            <h2 className="text-3xl font-bold text-white mb-4">CERTIFICATIONS</h2>
<hr className="my-4 border-neutral-700"/>

<div className="mb-6">
  <h3 className="font-semibold text-base">Udemy – Advanced Web Development</h3>
  <p className="text-sm text-neutral-400 leading-relaxed">
    Received a professional certificate from Udemy for completing an advanced web development course, demonstrating strong technical skills and creative problem‑solving abilities.
  </p>
  <hr className="my-4 border-neutral-700"/>
</div>

<div className="mb-6">
  <h3 className="font-semibold text-base">freeCodeCamp – Frontend Libraries</h3>
  <p className="text-sm text-neutral-400 leading-relaxed">
    Earned certification from freeCodeCamp for mastering frontend libraries including React, Redux, and Bootstrap, showcasing the ability to build modern, responsive applications.
  </p>
  <hr className="my-4 border-neutral-700"/>
</div>

<div>
  <h3 className="font-semibold text-base">Coursera – MERN Stack Development</h3>
  <p className="text-sm text-neutral-400 leading-relaxed">
    Achieved certification on Coursera for full‑stack development with MongoDB, Express, React, and Node.js, proving expertise in building scalable and efficient web solutions.
  </p>
</div>

          </motion.div>
    </motion.div>
  );
};

export default MotivationCertification;
