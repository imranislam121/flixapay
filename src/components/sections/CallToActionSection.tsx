
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeatureUnavailablePopup from '../ComingSoon';

const CallToActionSection = () => {
  const [comingSoonPopupOpen, setComingSoonPopupOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <FeatureUnavailablePopup isOpen={comingSoonPopupOpen} onClose={() => setComingSoonPopupOpen(false)} />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Send Money Globally?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join millions of users who trust FlixaPay for fast and secure international money transfers.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button onClick={() => setComingSoonPopupOpen(true)} className="bg-white text-pink-500 hover:bg-pink-50 hover:text-purple-600 px-8 py-6 text-lg">
                Send Money Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button onClick={() => setComingSoonPopupOpen(true)} variant="outline" className="bg-white text-purple-600 hover:bg-pink-50 hover:text-pink-600 px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.p 
            className="mt-8 text-sm text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            No hidden fees. Transparent pricing. 24/7 customer support.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
