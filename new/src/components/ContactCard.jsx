import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-md flex items-center gap-2"
      >
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <p className="text-xl sm:text-1xl font-semibold text-center text-white">
          AVAILABLE FOR FREELANCE
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md min-h-[540px]"
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
  );
};

export default ContactCard;
