import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#our-story', label: 'Our Story' },
    { href: '#core-pillars', label: 'Core Pillars' },
    { href: '#key-events', label: 'Events' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#legacy', label: 'Legacy' },
    { href: '#resources', label: 'Resources' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-lg font-display font-bold text-gold tracking-wide">LEO CLUB</span>
              <p className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Colombo Monarch</p>
            </div>
            <p className="text-sm text-white/40 mb-6 leading-relaxed">
              Thriving, Not Surviving — Building a legacy of high-impact, sustainable community leadership.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/10 hover:border-gold/40 hover:text-gold rounded flex items-center justify-center transition-all duration-300 text-white/40">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/40">
                  Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a href="mailto:info@leocolombomonarch.org" className="text-sm text-white/40 hover:text-gold transition-colors duration-200">
                  info@leocolombomonarch.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a href="tel:+94XXXXXXXX" className="text-sm text-white/40 hover:text-gold transition-colors duration-200">
                  +94 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">
              Get Involved
            </h4>
            <p className="text-sm text-white/40 mb-5 leading-relaxed">
              Join us in making a difference. Every volunteer makes an impact.
            </p>
            <div className="space-y-2">
              <button className="w-full px-5 py-2.5 border border-gold/30 text-gold/80 hover:border-gold hover:text-gold transition-all duration-300 rounded text-sm font-semibold tracking-wide">
                Become a Volunteer
              </button>
              <button className="w-full px-5 py-2.5 bg-gold text-navy hover:bg-gold-light transition-all duration-300 rounded text-sm font-semibold tracking-wide">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>
              &copy; {new Date().getFullYear()} Leo Club of Colombo Monarch. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>Affiliated with</span>
              <span className="text-gold/60 font-semibold">Lions Clubs International</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
