
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-fintech-lightGray to-white overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-fintech-orange/10 rounded-full px-4 py-1 mb-4">
            <span className="text-fintech-orange font-medium text-sm">Make Global Payments</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fintech-navy mb-4 leading-tight">
            Send Money <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Anywhere</span> in the World
          </h1>
          <p className="text-lg md:text-xl text-fintech-darkGray mb-8 max-w-xl">
            Fast, secure and affordable international money transfers for individuals and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link to={"/download"}>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-6 text-lg">
                Download Now
              </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link to={"/services"}>
              <Button variant="outline" className="border-fintech-darkGray text-fintech-darkGray hover:bg-fintech-lightGray py-6 px-8 text-lg">
                Learn More
              </Button>
              </Link>
            </motion.div>
          </div>
        
          {/* <div className="mt-8 flex items-center text-sm text-fintech-mediumGray">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-pink-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>No Subscriptions Required.</span>
          </div> */}
        </motion.div>

        <div className="relative hidden md:block">
          {/* Decorative elements */}
          <div className="absolute -z-10 rounded-full w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-3xl -top-10 -right-10"></div>
          <div className="absolute -z-10 rounded-full w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-400/20 blur-xl top-40 right-20"></div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="bg-fintech-lightGray rounded-lg px-4 py-1 text-pink-500 font-medium">Transfer Summary</div>
                <span className="text-purple-600 font-bold">$2,450.00</span>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="bg-fintech-lightGray rounded-lg p-4 flex justify-between"
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.7)" }}
                >
                  <div>
                    <p className="text-sm text-fintech-mediumGray">Send Amount</p>
                    <p className="font-bold text-fintech-darkGray">$2,500.00</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <span className="font-bold text-pink-500">$</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-fintech-lightGray rounded-lg p-4 flex justify-between"
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.7)" }}
                >
                  <div>
                    <p className="text-sm text-fintech-mediumGray">Exchange Rate</p>
                    <p className="font-bold text-fintech-darkGray">1 USD = 0.91 EUR</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m19 9-7 5-7-5" /></svg>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-fintech-lightGray rounded-lg p-4 flex justify-between"
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.7)" }}
                >
                  <div>
                    <p className="text-sm text-fintech-mediumGray">Recipient Gets</p>
                    <p className="font-bold text-fintech-darkGray">€2,275.00</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <span className="font-bold text-pink-500">€</span>
                  </div>
                </motion.div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white mt-6">
                Continue
              </Button>
            </motion.div>

            <motion.div
              className="absolute -bottom-10 -right-10 bg-white shadow-lg rounded-xl p-4 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            // animate={{ y: [0, -5, 0] }}
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <div>
                  <p className="text-xs text-fintech-mediumGray">Transfer Complete</p>
                  <p className="font-semibold text-fintech-darkGray">€2,275.00 to Maria S.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
