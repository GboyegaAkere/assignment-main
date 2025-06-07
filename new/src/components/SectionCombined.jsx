import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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

const expertiseItems = [
  {
    title: "Branding",
    description:
      "Crafting user-centered designs that blend creativity with functionality. I specialize in creating intuitive, visually appealing interfaces that enhance user experience and reflect brand identity across both web and mobile platforms.",
  },
  {
    title: "3D Design",
    description:
      "Bringing ideas to life with immersive 3D models and visualizations. From concept to creation, I specialize in crafting realistic, high-quality 3D assets for product visualization, animation, and interactive experiences.",
  },
  {
    title: "Web Development",
    description:
      "Transforming designs into fully functional, high-performing websites and apps. My expertise lies in building responsive, scalable, and secure digital experiences using the latest web technologies.",
  },
];

const SectionCombined = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT COLUMN: Toolbox + Expertise + Contact */}
        <div className="md:col-span-2 flex flex-col">

          {/* TOOLBOX */}
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

          {/* EXPERTISE and CONTACT grid for md+ and stacked for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            {/* EXPERTISE */}
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

            {/* CONTACT */}
           <div className="flex flex-col gap-4">
          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-md flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <p className="text-xl sm:text-2xl font-semibold text-center text-white">
              AVAILABLE FOR FREELANCE
            </p>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md min-h-[500px]"
          >
            <h2 className="text-3xl font-semibold mb-4">CONTACT</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                defaultValue="Samkeet Mehta"
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                defaultValue="samkeetm@gmail.com"
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <textarea
                placeholder="Tell me more about your project..."
                rows={3}
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <select className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm">
                <option>Select...</option>
                <option value="500">$500+</option>
                <option value="1000">$1000+</option>
                <option value="5000">$5000+</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-neutral-200 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Motivation and Certifications stacked, full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 md:col-start-3 mt-6 md:mt-0"
          style={{ minHeight: 0 }}
        >
          <div className="bg-neutral-900 rounded-xl p-6 shadow-md flex-grow overflow-auto">
            <h2 className="text-3xl font-bold text-white mb-4">MOTIVATION</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Driven by a passion for innovative design and a commitment to
              delivering high-quality work, I find motivation in the challenges
              each project presents...
            </p>
            <p className="mt-4 italic text-neutral-500">Wayne Kirkwood</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 shadow-md">
            <h2 className="text-3xl font-bold text-white mb-4">CERTIFICATIONS</h2>
            <hr className="my-4 border-neutral-700" />
            <div className="mb-6">
              <h3 className="font-semibold text-base">Awwwards – Site Of The Day</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Recognized for outstanding creativity and design in a cutting-edge
                website created for a major brand.
              </p>
              <hr className="my-4 border-neutral-700" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Webby Awards – Best Portfolio</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Awarded for innovation and exceptional design in crafting a personal
                portfolio that demonstrates both technical skill and aesthetic vision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCombined;
