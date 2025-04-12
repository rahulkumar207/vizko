
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-royalBlue shadow-lg py-2' : 'bg-royalBlue/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-2xl">Vizko</span>
          <span className="text-beige ml-1 font-medium">Exports</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-white hover:text-beige transition-colors ${
                  location.pathname === link.path ? 'font-bold border-b-2 border-beige' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-royalBlue transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`text-white hover:text-beige transition-colors py-2 ${
                location.pathname === link.path ? 'font-bold border-l-4 border-beige pl-2' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          
          {/* Social Media Icons in Mobile Menu */}
          <div className="flex space-x-6 pt-4 border-t border-white/20">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-beige transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
