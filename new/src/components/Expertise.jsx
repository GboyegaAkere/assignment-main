import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const expertiseItems = [
  {
    title: "Branding",
    description:
      "Crafting user-centered designs that blend creativity with functionality...",
  },
  {
    title: "3D Design",
    description:
      "Bringing ideas to life with immersive 3D models and visualizations...",
  },
  {
    title: "Web Development",
    description:
      "Transforming designs into fully functional, high-performing websites...",
  },
];

const Expertise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 rounded-xl p-6 shadow-md"
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
