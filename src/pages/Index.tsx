
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    // Handle reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('reveal-active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Clients />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
