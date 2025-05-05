
import React from 'react';
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your free account in minutes. No credit card required to get started.",
      color: "from-fintech-brightPurple to-fintech-purple"
    },
    {
      number: "02",
      title: "Receive Money",
      description: "Get paid in multiple currencies with local bank details in major markets.",
      color: "from-fintech-orange to-fintech-yellow"
    },
    {
      number: "03",
      title: "Withdraw & Spend",
      description: "Transfer funds to your bank account or spend directly with our business cards.",
      color: "from-fintech-brightBlue to-fintech-brightPurple"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-20 bg-fintech-lightGray relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -z-10 w-64 h-64 rounded-full bg-fintech-brightPurple/5 -top-32 -left-32"></div>
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-fintech-orange/5 -bottom-48 -right-48"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-fintech-orange/10 rounded-full px-4 py-1 mb-4">
            <span className="text-fintech-orange font-medium text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-fintech-navy mb-4">How It Works</h2>
          <p className="text-fintech-mediumGray max-w-2xl mx-auto">
            Start managing your global finances in three simple steps
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={item}>
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-fintech-brightPurple/30 to-transparent -translate-y-1/2 -z-10"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow hover-scale h-full border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-fintech-navy mb-4">{step.title}</h3>
                  <p className="text-fintech-darkGray">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="/services" 
            className="inline-flex items-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-fintech-brightPurple to-fintech-orange hover:opacity-80 transition-opacity font-medium"
          >
            View detailed process
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
