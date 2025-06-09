import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Head of Production at HBO",
    text: "Wayne exceeded all our expectations. The final product was stunning, and their ability to communicate and deliver on time made the whole process smooth and enjoyable.",
    logo: "/hbo.png"
  },
  {
    name: "Sarah Mitchell",
    role: "Lead UX Designer at Bose",
    text: "Working with Wayne was a game-changer. They took our vision and transformed it into something truly remarkable. The attention to detail and creativity is unmatched.",
    logo: "/bose.png"
  },
  {
    name: "David Rodriguez",
    role: "Senior Creative Director at Xbox",
    text: "I've collaborated with countless designers, but Wayne stands out for their innovative approach and seamless execution. Our project was elevated beyond expectations.",
    logo: "/xbox.png"
  },
  {
    name: "Jessica Parker",
    role: "Marketing Manager at Activision",
    text: "Wayne brought an incredible level of professionalism and creativity to our project. They understood our brand and delivered beyond what we had hoped for.",
    logo: "/activision.png"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-1 mt-5">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        {/* Outer bordered container including the title */}
        <div className="border border-neutral-800 rounded-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-4 p-4 pb-0">
            TESTIMONIALS
          </h2>

          {/* Inner container to apply only left and right borders to the scroller */}
          <div className="border-l border-r mx-7 border-black overflow-hidden">
            <motion.div
              className="flex space-x-4 w-max pl-4 pr-4 py-4"
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
                  className="min-w-[300px] max-w-xs border border-neutral-800 rounded-xl p-4 h-full"
                >
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-neutral-500 mb-2">{item.role}</p>
                    <hr className="border-gray-700" />
                  </div>
                  <p className="text-sm text-neutral-300 mt-3">"{item.text}"</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
