
import React, { useEffect, useRef } from 'react';
import { Users, Briefcase, Building, Search, User, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Executive Search",
    description: "Find top-tier leadership talent for C-suite, director, and VP positions with our specialized executive search services.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Permanent Staffing",
    description: "Fill key full-time positions across all organizational levels with qualified professionals who match your company culture.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Contract Staffing",
    description: "Get flexible workforce solutions with our contract staffing services for project-based needs and temporary requirements.",
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    title: "Campus Recruitment",
    description: "Connect with fresh talent through our comprehensive campus recruitment programs at leading educational institutions.",
  },
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "HR Consulting",
    description: "Optimize your hiring processes, retention strategies, and workplace policies with our expert HR consulting services.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Payroll & Legal Service",
    description: "Streamline your payroll processing and ensure legal compliance with our comprehensive payroll and legal support services.",
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            Comprehensive recruitment solutions tailored to meet your specific hiring needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${100 * (index + 3)}ms` }}
              ref={el => serviceRefs.current[index] = el}
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal reveal-delay-500">
          <a href="#contact" className="button-primary">
            Discuss Your Hiring Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
