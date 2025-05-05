
import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import FeatureUnavailablePopup from '../ComingSoon';

const FeaturesSection = () => {
  const features = [
    {
      title: "Global Payments",
      description: "Send money to over 190 countries in 80+ currencies with competitive exchange rates and low fees.",
      icon: (
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fintech-brightPurple to-fintech-purple flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      ),
      gradient: "from-fintech-brightPurple to-fintech-purple",
    },
    {
      title: "Multi-Currency Accounts",
      description: "Hold, manage, and convert multiple currencies in one secure account, with local banking details in major markets.",
      icon: (
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fintech-orange to-fintech-yellow flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1"/>
            <path d="M8 21h8a2 2 0 0 0 2-2v-5.5c0-.93-.64-1.74-1.55-1.94L8.5 10.1a1.24 1.24 0 0 1-.84-1.94L10 5"/>
            <path d="M7 10.5V13a2 2 0 0 0 2 2h7"/>
          </svg>
        </div>
      ),
      gradient: "from-fintech-orange to-fintech-yellow",
    },
    {
      title: "Secure Transactions",
      description: "Enterprise-grade security with advanced encryption, two-factor authentication, and real-time fraud monitoring.",
      icon: (
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fintech-brightBlue to-fintech-brightPurple flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
      ),
      gradient: "from-fintech-brightBlue to-fintech-brightPurple",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
const [comingSoon, setComingSoon] = useState(false);
  return (
    <section id="features" className="py-20">
      <FeatureUnavailablePopup isOpen={comingSoon} onClose={() => setComingSoon(false)} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-fintech-brightPurple/10 rounded-full px-4 py-1 mb-4">
            <span className="text-fintech-brightPurple font-medium text-sm">OUR FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-fintech-navy mb-4">Powerful Financial Solutions</h2>
          <p className="text-fintech-mediumGray max-w-2xl mx-auto">
            Everything you need to manage your global finances in one platform, designed for businesses of all sizes.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow hover-scale overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`}></div>
                <CardHeader className="pb-2">
                  {feature.icon}
                  <CardTitle className="text-xl font-bold text-fintech-navy mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-fintech-darkGray text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="/about" className={`inline-flex items-center text-gradient bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient} font-medium hover:opacity-80 transition-opacity`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-fintech-brightPurple to-fintech-purple rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          </div>
          
          <motion.div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to go global with your business?</h3>
            <p className="mb-8 max-w-2xl mx-auto">Join thousands of businesses using our platform to expand internationally.</p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <button onClick={() => setComingSoon(true)} className="bg-white text-fintech-brightPurple font-semibold py-3 px-8 rounded-lg hover:bg-fintech-lightGray transition-colors">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
