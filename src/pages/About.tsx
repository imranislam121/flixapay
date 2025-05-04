'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="font-futura">
      <Header />
      <div className="bg-gradient-to-b from-pink-50 to-blue-50 min-h-screen pb-6 font-futura">
        <div className="max-w-5xl mx-auto pt-64 md:pt-40 lg:pt-48 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-pink-600 mb-6"
          >
            About FlixaPay
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-6"
          >
            FlixaPay is a digital financial platform committed to revolutionizing
            cross-border payments and financial inclusion. With offices in
            Amsterdam, New York, and London, FlixaPay combines cutting-edge
            technology with regulatory expertise to serve both individuals and
            businesses globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2 mt-8">
              Strategic Foundation
            </h2>
            <p className="text-gray-700 mb-6">
              To ensure a successful launch, FlixaPay collaborates with top-tier
              professional advisors. These include Regulatory Compliance Advisors,
              Risk Management Advisors, and Business Strategy Advisors. They help
              navigate legal frameworks, ensure operational security, and guide
              growth strategies.
            </p>

            <h2 className="text-2xl font-bold text-pink-600 mb-2 mt-8">
              Global Premises
            </h2>
            <p className="text-gray-700 mb-6">
              Our headquarters operate from leased, high-tech serviced offices in
              key financial districts, including Amsterdam, New York, and London.
              The spaces are equipped with high-speed internet, dedicated server
              rooms, 24/7 security, and soundproof customer service areas.
            </p>

            <h2 className="text-2xl font-bold text-pink-600 mb-2 mt-8">
              Web & Legal Infrastructure
            </h2>
            <p className="text-gray-700 mb-2">
              Our official domains,{" "}
              <a
                href="https://flixapay.com"
                className="text-blue-500 underline"
                target="_blank"
              >
                flixapay.com
              </a>{" "}
              and{" "}
              <a
                href="https://flixapaygroup.com"
                className="text-blue-500 underline"
                target="_blank"
              >
                flixapaygroup.com
              </a>{" "}
              provide a professional digital gateway. Communication is streamlined
              via Teams and Zoom.
            </p>
            <p className="text-gray-700">
              FlixaPay has established policies covering Privacy, Anti-Money
              Laundering (AML), IT Security, Data Protection, Equal Opportunities,
              and more to ensure compliance and operational excellence.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
