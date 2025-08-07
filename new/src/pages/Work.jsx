import { useParams } from "react-router-dom";
import { useState } from "react";
import featuredProjects from "../assets/asset";
import { ExternalLink } from "lucide-react"; // make sure lucide-react is installed

const Work = () => {
  const { id } = useParams();
  const project = featuredProjects.find(p => p.slug === id);

  const [mainImage, setMainImage] = useState(project?.image); // initial main image

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <section className="bg-black text-white py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold uppercase mb-1">{project.title}</h1>
        <p className="text-neutral-400 mb-8">{project.subtitle}</p>

        {/* Main image with hover & mobile overlay */}
        <div className="relative group w-full mb-6 rounded-md overflow-hidden">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full rounded-md transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded shadow-lg">
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </span>
            </div>
          </a>
        </div>

        {/* Description */}
        <div className="bg-neutral-900 p-4 text-sm border border-neutral-800 rounded-md mb-8">
          <p>{project.description}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              onClick={() => setMainImage(img)}
              className="rounded-md w-full h-[200px] object-cover border border-neutral-800 cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
