import { motion } from "framer-motion";
import blender from "../images/blender.png";
import react from "../images/react.png";
import photo from "../images/photo.jpg";
import figma from "../images/figma.webp";
import notion from "../images/notion.png";

const testimonials = [
  { image: blender },
  { image: react },
  { image: photo },
  { image: figma },
  { image: notion },
  { image: blender },
  { image: react },
  { image: figma },
  { image: notion },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Boxtool = () => {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden p-4 min-h-[150px] mb-6 md:mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">TOOLBOX</h2>
      <div className="border-l border-r border-neutral-800 overflow-hidden px-2">
        <motion.div
          className="flex w-max space-x-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[40px] max-w-[40px] h-[40px] border rounded border-neutral-800 overflow-hidden flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={`tool-${index}`}
                className="w-[50px] h-[50px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Boxtool;
