import { useEffect, useRef, useState } from 'react';
import { Mail } from 'lucide-react';
import { currentPresident, executiveBoard } from '../data/siteData';

const Leadership = () => {
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

  const president = executiveBoard[0];
  const boardMembers = executiveBoard.slice(1);

  return (
    <section id="leadership" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-dark">Year 5</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3">
            Current Leadership
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4"></div>
        </div>

        {/* President Profile */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-navy rounded-lg p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            <div className="relative z-10">
              {/* President Photo */}
              <div className="flex justify-center mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gold/50">
                  <img
                    src={president.image}
                    alt={president.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-1">
                  {currentPresident.name}
                </h3>
                <p className="text-gold text-sm font-semibold tracking-wide uppercase">
                  {currentPresident.role}
                </p>
                <p className="text-white/50 text-sm mt-2">
                  Theme: "{currentPresident.theme}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-base font-display italic text-white/70 leading-relaxed text-center mb-8">
                  "When you see the Banana Yellow and Oxford Blue of our club this year, I want it to represent energy, stability, and growth. Whether we are planting trees or teaching a child to read, we aren't just checking a box. We are building a legacy that will last for the next five years and beyond."
                </p>
                <div className="flex justify-center">
                  <a
                    href={`mailto:${currentPresident.email}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-navy font-semibold rounded text-sm tracking-wide hover:bg-gold-light transition-all duration-300 uppercase"
                  >
                    <Mail size={16} />
                    Contact President
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Board */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-display font-bold text-navy text-center mb-10">
            Executive Board
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-48 h-48 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gold/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-sm font-display font-bold text-navy leading-tight">{member.name}</p>
                <p className="text-xs text-gold-dark font-semibold tracking-wide mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
