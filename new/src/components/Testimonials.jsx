import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adeola Johnson",
    role: "CEO at NaijaStyle Fashion, Nigeria",
    text: "Oluwagboyega transformed our online store into a modern, user-friendly e‑commerce platform. Sales have increased significantly, and the site runs faster than ever. His attention to mobile optimization was outstanding.",
    logo: "/naijastyle.png"
  },
  {
    name: "Lucas Martins",
    role: "Lead Developer at CodeAcademia, Brazil",
    text: "The web development tutorials from Oluwagboyega have been a huge asset to our students. His clear explanations and real‑world projects helped many learners transition from HTML basics to full React applications.",
    logo: "/codeacademia.png"
  },
  {
    name: "Sophia Lee",
    role: "Marketing Manager at SeoulTech Solutions, South Korea",
    text: "We hired Oluwagboyega to build a custom business dashboard. The result was fast, intuitive, and beautifully designed. His ability to merge design thinking with technical expertise is unmatched.",
    logo: "/seoultech.png"
  },
  {
    name: "David Miller",
    role: "Founder at GreenEats Organics, United Kingdom",
    text: "Our organic food store needed a complete website overhaul. Oluwagboyega delivered a secure, SEO‑friendly e‑commerce site with smooth checkout and payment integration. The feedback from customers has been amazing.",
    logo: "/greeneats.png"
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
