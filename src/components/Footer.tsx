
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display text-2xl font-bold">Nishav Solutions</span>
              <span className="text-xs font-medium bg-accent/20 text-accent/90 px-2 py-0.5 rounded-full">INDIA</span>
            </div>
            <p className="mb-6 text-gray-400">
              Your trusted partner in recruitment and talent acquisition across India. We connect exceptional talent with leading companies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Clients
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-gray-400">
                  Office No. - 2, 2B Darmanagar,<br />
                  Nr. BOB Bank, Sabarmati,<br />
                  Ahmedabad, Gujarat - 380005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-gray-400">+91 9649410824</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-gray-400">info@nishavgroup.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-gray-400">darshan@nishavgroup.in</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-5">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} Nishav Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
