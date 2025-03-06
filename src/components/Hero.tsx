import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctasRef.current) observer.observe(ctasRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctasRef.current) observer.unobserve(ctasRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container text-center max-w-5xl" ref={containerRef}>
        <div className="relative z-10">
          <span className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium reveal reveal-delay-100" ref={titleRef}>
            LEADING RECRUITMENT CONSULTANCY IN INDIA
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight tracking-tight reveal reveal-delay-200" ref={titleRef}>
            Connecting <span className="text-gradient">Exceptional Talent</span> With Leading Companies
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 reveal reveal-delay-300" ref={subtitleRef}>
            We help organizations find the perfect candidates and assist professionals in discovering their ideal career opportunities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal reveal-delay-400" ref={ctasRef}>
            <a href="#services" className="button-primary flex items-center justify-center gap-2 text-base md:text-lg">
              Our Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="button-secondary flex items-center justify-center gap-2 text-base md:text-lg">
              Schedule a Consultation
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal reveal-delay-500" ref={statsRef}>
            <div className="glass-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
              <div className="text-gray-600">Professionals Placed</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-subtle animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default Hero;
