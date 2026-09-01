import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#our-story', label: 'Our Story' },
    {
      label: 'About',
      dropdown: [
        { href: '#core-pillars', label: 'Core Pillars' },
        { href: '#projects', label: 'Our Projects' },
        { href: '#leadership', label: 'Current Leadership' },
        { href: '#legacy', label: 'Hall of Presidents' },
      ],
    },
    { href: '#key-events', label: 'Events' },
    {
      label: 'Resources',
      dropdown: [
        { href: '#resources', label: 'Downloads' },
        { href: '#', label: 'Newsletter' },
        { href: '#', label: 'Photo Gallery' },
      ],
    },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDropdownEnter = (index) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy shadow-[0_2px_5px_rgba(0,0,0,0.3)] py-2'
          : 'bg-transparent border-b border-white/[0.15] py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex items-center justify-between">
          {/* Brand / Logo - UoM Leos style: bold, large, letter-spaced */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-white font-display font-bold text-2xl lg:text-[32px] tracking-[4px] uppercase leading-none hover:text-gold transition-colors duration-300"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="text-gold">Leo</span> Colombo Monarch
            </a>
          </div>

          {/* Desktop Navigation - right aligned like UoM Leos */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.dropdown && handleDropdownEnter(index)}
                onMouseLeave={() => link.dropdown && handleDropdownLeave()}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-[15px] text-white hover:text-gold transition-colors duration-300 font-medium tracking-[1px]"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu - flat, no border-radius like UoM Leos */}
                    <div
                      className={`absolute top-full left-0 min-w-[220px] bg-[#f8f9fa] shadow-lg transition-all duration-200 ${
                        activeDropdown === index
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-5 py-2.5 text-sm text-[#4a4c70] hover:bg-gold hover:text-navy transition-colors duration-200 font-medium"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 text-[15px] text-white hover:text-gold transition-colors duration-300 font-medium tracking-[1px]"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="#"
              className="ml-4 px-5 py-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 text-sm font-semibold tracking-[1px]"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="bg-navy border-t border-white/10">
          <div className="px-4 py-3">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-2 py-3 text-white hover:text-gold transition-colors duration-200 font-medium tracking-wide"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === index ? 'max-h-48' : 'max-h-0'}`}>
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block pl-6 pr-2 py-2.5 text-sm text-white/60 hover:text-gold transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-2 py-3 text-white hover:text-gold transition-colors duration-200 font-medium tracking-wide"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#"
                className="block text-center px-5 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 font-semibold tracking-wide"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
