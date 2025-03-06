
import React, { useEffect, useRef } from 'react';

const clientList = [
  "Parceldeck",
  "Shreehari Education",
  "Radiance Technologies",
  "Maintedge Techlabs",
  "AavGO",
  "TeroTAM Technolabs",
  "Astics Techlabs",
  "Abilities India Pistons & Rings",
  "Oizom",
  "Fitcast",
  "Webosphere",
  "QLTech",
  "Kalintis",
  "Comptech Equipments",
  "Fuji Silvertech",
  "TD Engineering & Consulting"
];

const Clients: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

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
    if (clientsRef.current) observer.observe(clientsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (clientsRef.current) observer.unobserve(clientsRef.current);
    };
  }, []);

  return (
    <section id="clients" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            Trusted by leading companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 reveal reveal-delay-300" ref={clientsRef}>
          {clientList.map((client, index) => (
            <div key={index} className="glass-card p-6 flex items-center justify-center">
              <div className="h-16 w-full bg-gray-200/50 rounded-md flex items-center justify-center text-gray-700 font-medium">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
