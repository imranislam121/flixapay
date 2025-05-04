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
        <section className="bg-gradient-to-br  pt-64 md:pt-40 lg:pt-48 px-4 from-pink-500 via-purple-500 to-blue-500 text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h2>

            <motion.p
              className="mb-6 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Flixapay was born out of a deep recognition of the global financial divide. A large portion of the world’s population still lacks access to basic banking services. Individuals and businesses often face high fees for essential transactions, such as cross-border payments, and are forced to navigate inefficient, fragmented financial tools.
            </motion.p>

            <motion.p
              className="mb-6 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Motivated by this gap, our founder envisioned a digital platform that empowers people and businesses to thrive in a global economy. Flixapay offers low-cost, real-time international payments, multi-currency digital wallets, and micro-loans for individuals. For businesses, we provide payroll solutions, multi-currency accounts, and advanced transaction tools—all within a seamless, user-friendly experience.
            </motion.p>

            <motion.p
              className="mb-12 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Our mission is driven by the belief that everyone deserves access to efficient and affordable financial services, regardless of geography or status. Through cutting-edge technology and financial innovation, Flixapay is committed to reshaping financial access and building a more inclusive global economy.
            </motion.p>

            <motion.h3
              className="text-3xl md:text-4xl font-semibold mb-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Mission Statement
            </motion.h3>

            <motion.p
              className="text-center text-xl md:text-2xl italic font-light max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              "To revolutionize financial access by bridging the gap between underserved and developed markets with cutting-edge digital banking solutions."
            </motion.p>
            <motion.h3
              className="text-3xl md:text-4xl font-semibold my-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Our Values
            </motion.h3>

            <motion.p
              className="text-center text-xl md:text-2xl italic font-light max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              The business is committed to delivering convenience and accessibility through its digital financial platform, ensuring that
              both individuals and businesses can easily manage their financial needs. It prioritizes security and trust, providing a reliable
              and transparent service that users can depend on. Affordability and speed are at the core of its offerings, making financial
              transactions cost-effective and efficient. The business values flexibility and integration, offering solutions that seamlessly fit
              into the diverse financial ecosystems of its clients
            </motion.p>
          </div>
        </section>
        <div className="max-w-5xl mx-auto py-6">
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
            cross-border payments and financial inclusion.we have global presence and operate in UK, USA, Canada, Europe, Australia, India, Brazil with African markets soon to launch, FlixaPay combines cutting-edge
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
              Web & Legal Infrastructure
            </h2>
            <p className="text-gray-700 mb-2">
              Our official domain,{" "}

              <a
                href="https://flixapaygroup.com"
                className="text-blue-500 underline"
                target="_blank"
              >
                flixapaygroup.com
              </a>{" "}
              provide a professional digital gateway.
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
