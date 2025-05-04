import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "24/7 AI-Driven Support",
    description:
      "Our AI chatbot ensures customers get instant, accurate assistance anytime—enhancing satisfaction and reducing wait times.",
  },
  {
    title: "Biometric Authentication",
    description:
      "FlixaPay integrates fingerprint and facial recognition for secure and seamless access to your financial dashboard.",
  },
  {
    title: "Customizable Dashboard",
    description:
      "Real-time financial insights and personalization let users track transactions, budgets, and goals effortlessly.",
  },
  {
    title: "Smart Micro-Loan Pricing",
    description:
      "Machine learning models analyze borrower behavior and market trends to offer optimized, profitable loan rates.",
  },
  {
    title: "Cloud Scalability",
    description:
      "Our robust cloud infrastructure ensures seamless service delivery even at high transaction volumes.",
  },
  {
    title: "API-Driven Integrations",
    description:
      "Easily connect with third-party tools and expand functionality through our secure and versatile API ecosystem.",
  },
];

export default function Benefit() {
  return (
    <div className="bg-pink-50 min-h-screen p-6 font-futura">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
          Why Choose FlixaPay?
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-pink-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
