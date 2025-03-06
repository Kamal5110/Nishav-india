
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            About <span className="text-gradient">Nishav Solutions</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            Your Trusted Partner in Recruitment & IT Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal reveal-delay-300" ref={contentRef}>
            <p className="text-lg text-gray-700 mb-6">
              At Nishav Solutions, we are dedicated to providing top-notch recruitment and IT services to businesses locally and globally. With an extensive range of customized solutions, we help companies gain a commercial advantage in their respective sectors through cost-effective expertise.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900">Who We Are</h3>
            <p className="text-lg text-gray-700 mb-6">
              Established in 2018 in Ahmedabad, India, formerly started as a consulting company, Nishav has emerged as a leading recruitment and IT services provider. We specialize in crafting engaging websites, mobile applications, SEO strategies, and end-to-end hiring solutions.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900">Our Expertise</h3>
            <p className="text-lg text-gray-700 mb-6">
              We excel in providing the best candidates across various fields through our strong network and vast talent database. Our operational system is industry-specific, ensuring that candidates are thoroughly vetted based on qualifications, skills, and personality traits.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900">Why Choose Nishav?</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Right Talent, Right Fit – Our recruiters have years of practical industry experience in sourcing high-quality professionals.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Fast & Efficient Hiring – We ensure quick and reliable recruitment services through our strong and updated database.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">100% Satisfaction & Transparency – We provide quality manpower solutions with complete trust and professionalism.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Flexible Hiring Models – Whether it's full-cycle recruitment, contract hiring, or dedicated resource deployment, we have you covered.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900">Our Services</h3>
            <div className="space-y-2 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Sourcing & Administrative Support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Full-Cycle Recruitment Solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Dedicated Resource Deployment (Contract-to-Hire)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-gray-700">Third-Party Hiring Solutions</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900">Our Commitment</h3>
            <p className="text-lg text-gray-700 mb-6">
              At Nishav Business Solutions, we are committed to building long-term partnerships by delivering exceptional service. We understand that hiring the right people drives business success, and we take pride in being your trusted recruitment partner.
            </p>
            
            <a href="#contact" className="button-primary inline-block">Contact Us</a>
          </div>
          
          <div className="order-1 md:order-2 reveal reveal-delay-400" ref={imageRef}>
            <div className="relative">
              <div className="glass-card overflow-hidden rounded-lg shadow-xl aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
