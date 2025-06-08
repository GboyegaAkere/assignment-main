import Boxtool from "./Boxtool";
import Expertise from "./Expertise";
import ContactCard from "./ContactCard";
import MotivationCertification from "./MotivationCertification";

const SectionCombined = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Toolbox + Expertise + Contact */}
        <div className="md:col-span-2 flex flex-col">
          <Boxtool />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <Expertise />
            <ContactCard />
          </div>
        </div>

        {/* RIGHT COLUMN: Motivation + Certifications */}
        <div className="md:col-start-3 mt-6 md:mt-0">
          <MotivationCertification />
        </div>
      </div>
    </section>
  );
};

export default SectionCombined;
