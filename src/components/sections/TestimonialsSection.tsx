
import React from 'react';
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Flixapay has transformed how our e-commerce business handles international payments. The multi-currency accounts saved us thousands in conversion fees.",
      author: "Sarah Johnson",
      position: "CEO, Global Retail Inc.",
      rating: 5,
    },
    {
      content: "We've been able to expand into 5 new markets in just 6 months thanks to the seamless payment solutions. Our clients love how fast they receive payments now.",
      author: "Michael Chen",
      position: "CFO, TechSolutions Ltd",
      rating: 5,
    },
    {
      content: "The platform is intuitive and their customer service team is exceptional. They helped us navigate complex regulatory requirements for our international expansion.",
      author: "Elena Rodriguez",
      position: "Operations Director, Innovate Corp",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fintech-darkGray mb-4">Success Stories</h2>
          <p className="text-fintech-mediumGray max-w-2xl mx-auto">
            Hear from businesses that have expanded globally with our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md p-8 hover:shadow-lg transition-shadow hover-scale">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D946EF" stroke="#D946EF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-fintech-darkGray mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-fintech-darkGray">{testimonial.author}</p>
                <p className="text-sm text-fintech-mediumGray">{testimonial.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
