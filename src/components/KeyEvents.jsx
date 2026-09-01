import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { keyEvents } from '../data/siteData';

const KeyEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const events = keyEvents;

  return (
    <section id="key-events" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-dark">Our Impact</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3">
            Events
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Join us in making a difference or see the impact we've already made
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase ${
                    event.type === 'upcoming'
                      ? 'bg-gold text-navy'
                      : 'bg-white/90 text-gray-700'
                  }`}>
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-navy mb-3">
                  {event.title}
                </h3>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-gold" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-gold" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {event.description}
                </p>

                <button className="inline-flex items-center text-sm text-gold-dark hover:text-navy font-semibold transition-colors duration-300 group/btn">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyEvents;
