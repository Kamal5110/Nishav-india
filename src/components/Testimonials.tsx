
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Nishav Solutions has been instrumental in helping us build our tech team in Bangalore. They understand our company culture and consistently deliver candidates who are both technically strong and a great cultural fit.",
    name: "Priya Sharma",
    title: "CTO, TechSolutions India",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "As a fast-growing startup, we needed to scale our team quickly without compromising on quality. Nishav Solutions helped us fill 15 critical positions within two months, all with exceptional talent.",
    name: "Arjun Singh",
    title: "Founder & CEO, Maintedge Techlabs",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "We've worked with several recruitment agencies, but Nishav Solutions stands out with their thorough understanding of the financial services industry and their ability to source specialized talent even for our most challenging roles.",
    name: "Nidhi Sharma",
    title: "HR Director, Parceldeck Solutions",
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            Hear from organizations that have transformed their hiring process with our expertise
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal reveal-delay-300" ref={testimonialRef}>
          <div className="glass-card p-8 md:p-12 relative">
            <div className="absolute -top-6 -left-6 text-primary opacity-20">
              <Quote size={64} />
            </div>
            
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-500 absolute top-0 left-0 w-full",
                    index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                  )}
                  style={{ position: index === activeIndex ? 'relative' : 'absolute' }}
                >
                  <blockquote className="text-xl md:text-2xl font-display text-gray-800 mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
