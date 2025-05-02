
import React from 'react';
import { motion } from "framer-motion";

const TrustedBySection = () => {
  // Company logos would normally be imported from your assets
  const companies = [
    { name: "Company A", logo: "A", color: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Company B", logo: "B", color: "bg-gradient-to-br from-pink-400 to-pink-600" },
    { name: "Company C", logo: "C", color: "bg-gradient-to-br from-purple-500 to-purple-700" },
    { name: "Company D", logo: "D", color: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Company E", logo: "E", color: "bg-gradient-to-br from-pink-400 to-pink-600" },
    { name: "Company F", logo: "F", color: "bg-gradient-to-br from-purple-500 to-purple-700" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-center text-pink-500 font-medium mb-8">TRUSTED BY CUSTOMERS WORLDWIDE</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center"
              variants={item}
              whileHover={{ 
                scale: 1.1, 
                transition: { type: "spring", stiffness: 400 } 
              }}
            >
              <div className="w-24 h-16 bg-white rounded-md flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className={`w-10 h-10 rounded-full ${company.color} flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{company.logo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-fintech-mediumGray text-sm">Join over 2 million users who trust FlixaPay for their money transfers</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
