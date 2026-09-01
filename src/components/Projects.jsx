import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/siteData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-dark">Year 5 Impact</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3">
            Our Projects
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Service in action — every project is a step toward a thriving community
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent"></div>
                {/* Pillar badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-navy text-xs font-bold tracking-wide uppercase rounded">
                    {project.pillar}
                  </span>
                </div>
                {/* Project name on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white">{project.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    {project.gallery.length + 1} photos
                  </span>
                  <div className="flex -space-x-2">
                    {project.gallery.slice(0, 3).map((img, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full overflow-hidden border-2 border-white"
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
