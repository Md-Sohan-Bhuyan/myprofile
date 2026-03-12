import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-serif font-bold tracking-wider hover:text-white/80 transition-colors">
          Md Sohan Bhuyan
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:sohanbhuyan7@gmail.com"
            className="px-5 py-2 text-sm font-semibold border border-white/20 rounded-full hover:bg-white hover:text-background transition-all"
          >
            Hire Me &gt;&gt;
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-6 px-6 flex flex-col gap-6 items-center z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:sohanbhuyan7@gmail.com"
            className="px-6 py-3 mt-2 text-base font-semibold border border-white/20 rounded-full hover:bg-white hover:text-background transition-all inline-block w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me &gt;&gt;
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
