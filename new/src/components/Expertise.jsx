import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const expertiseItems = [
   {
    title: "Frontend Web Development",
    description:
      "Expert in creating responsive, SEO‑friendly, and visually engaging websites using HTML5, CSS3, JavaScript, and React.js. I specialize in building fast-loading, mobile-first interfaces that improve user experience and boost search engine rankings."
  },
  {
    title: "Backend Development with Node.js",
    description:
      "Skilled in developing secure, high-performance server-side applications using Node.js and Express. I integrate RESTful APIs, manage databases like MongoDB, and deliver scalable backend solutions for businesses in Nigeria and beyond."
  },
  {
    title: "Full‑Stack MERN Development",
    description:
      "With over 3 years of experience in the MERN stack (MongoDB, Express.js, React.js, Node.js), I deliver end‑to‑end web solutions — from UI/UX design to deployment. I build high‑performing, SEO‑optimized web applications that drive traffic and engagement."
  }
  
];

const Expertise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 rounded-xl p-6 shadow-md md:h-155"
    >
      <h2 className="text-3xl font-semibold mb-6 border-b border-neutral-800 inline-block">
        EXPERTISE
      </h2>
      {expertiseItems.map((item, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 size={18} className="text-green-500" />
            <h3 className="text-md font-semibold">{item.title}</h3>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {item.description}
          </p>
          {index < expertiseItems.length - 1 && (
            <hr className="mt-4 border-neutral-800" />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Expertise;
