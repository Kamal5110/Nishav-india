
import React, { useRef, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const industries = [
  'IT & ITES',
  'Engineering & Manufacturing',
  'Oil & Gas',
  'Software & Technology',
  'Banking & Finance',
  'BPO & Call Centers',
  'Retail & FMCG',
  'Automobile & Logistics',
  'Pharmaceutical & Healthcare',
  'Education & Telecom',
  'Real Estate & Construction'
];

const Industries: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (industriesRef.current) observer.unobserve(industriesRef.current);
    };
  }, []);

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            We have expertise in multiple industries, providing specialized recruitment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal reveal-delay-300" ref={industriesRef}>
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-primary flex items-center gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase size={24} className="text-primary" />
              </div>
              <span className="text-lg font-medium text-gray-800 hover:text-primary transition-colors duration-300">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
