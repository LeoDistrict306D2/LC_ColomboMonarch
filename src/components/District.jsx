import { useEffect, useRef, useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { aboutDistrict, clubInfo } from '../data/siteData';

const District = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="district" ref={sectionRef} className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-4">
            <img
              src={aboutDistrict.mapImage}
              alt="Map of Sri Lanka with Leo District 306 D2 highlighted"
              className="w-full max-w-[240px] mx-auto"
            />
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-gold" />
              <span className="text-xs text-gray-500">District 306 D2</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Part of a Wider Network
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3 leading-tight">
              Leo District 306 D2
            </h2>
            <div className="w-12 h-0.5 bg-gold mt-4 mb-6" />
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">{aboutDistrict.content}</p>
            <a
              href={aboutDistrict.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded bg-navy text-white text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors duration-300"
            >
              Explore Leo District 306 D2
              <ChevronRight size={15} />
            </a>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400">
            Leo Clubs in the District
          </span>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {aboutDistrict.clubs.map((name) => {
              const isUs = name === clubInfo.name;
              return (
                <div
                  key={name}
                  className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm transition-colors duration-300 ${
                    isUs
                      ? 'bg-navy border-navy text-white font-semibold'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gold/50'
                  }`}
                >
                  <MapPin
                    size={14}
                    className={`shrink-0 ${isUs ? 'text-gold' : 'text-navy/40'}`}
                  />
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default District;
