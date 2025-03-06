
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-primary font-display text-2xl font-bold">Nishav Solutions</span>
          <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">INDIA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link font-medium">About</a>
          <a href="#services" className="nav-link font-medium">Services</a>
          <a href="#clients" className="nav-link font-medium">Clients</a>
          <a href="#industries" className="nav-link font-medium">Industries Served</a>
          <a href="#testimonials" className="nav-link font-medium">Testimonials</a>
          <a href="#contact" className="button-primary">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container py-8 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-primary font-display text-2xl font-bold">Nishav Solutions</span>
              <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">INDIA</span>
            </a>
            <button 
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-8">
            <a 
              href="#about" 
              className="py-3 px-4 hover:bg-gray-50 rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="py-3 px-4 hover:bg-gray-50 rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#clients" 
              className="py-3 px-4 hover:bg-gray-50 rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </a>
            <a 
              href="#industries" 
              className="py-3 px-4 hover:bg-gray-50 rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries Served
            </a>
            <a 
              href="#testimonials" 
              className="py-3 px-4 hover:bg-gray-50 rounded-md text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="button-primary mt-4 mx-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
