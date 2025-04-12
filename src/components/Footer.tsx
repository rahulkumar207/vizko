
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royalBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-3xl">Vizko</span>
              <span className="text-beige ml-1 font-medium text-2xl">Exports</span>
            </div>
            <p className="text-gray-200 mb-4">
              Connecting India to the world through premium quality mattresses.
              Engineering comfort. Exporting trust.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-beige transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-beige transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-beige transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-beige mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-200 hover:text-beige transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-beige transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-200 hover:text-beige transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-200 hover:text-beige transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-beige mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-beige mt-1 mr-3" />
                <p className="text-gray-200">
                  123 Export Avenue, Industrial Area,<br />
                  Mumbai, Maharashtra 400001, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-beige mr-3" />
                <a href="tel:+911234567890" className="text-gray-200 hover:text-beige transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-beige mr-3" />
                <a href="mailto:info@vizkoexports.com" className="text-gray-200 hover:text-beige transition-colors">
                  info@vizkoexports.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Vizko Global Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
