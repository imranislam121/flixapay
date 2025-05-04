// Mission.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProblemSolution from "@/components/ProblemSolution";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Mission = () => {
  return (
    <div className="font-futura">
      <Header />
      <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 pt-64 md:pt-40 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl  mx-auto py-16 px-6 lg:px-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://t4.ftcdn.net/jpg/00/96/54/53/240_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
              alt="Digital banking illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.h2
              className="text-5xl font-extrabold text-pink-700 mb-6 leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              Empowering the Future of Finance
            </motion.h2>

            {[
              "At FlixaPay, we’re revolutionizing financial access for everyone—no matter where they are. Our digital solutions connect underserved and developed markets with real-time, affordable banking tools.",
              "We provide individuals with digital wallets, micro-loans, and low-cost cross-border payments. Businesses benefit from payroll solutions, PoS systems, and multi-currency accounts—all on one unified platform.",
              "With a seamless user experience and scalable tech, FlixaPay isn’t just a product—it’s a financial evolution.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-lg text-gray-800 leading-relaxed mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i + 1}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div className="bg-pink-50 py-20 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-pink-700 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={4}
            >
              The Company & Management
            </motion.h2>

            {[
              "FlixaPay partners with top institutions to provide robust financial infrastructure for both individuals and enterprises.",
              "We are structured as a corporation to ensure stability, innovation, and scalability. Our open API invites developers to extend our platform's capabilities with custom apps and integrations.",
              "FlixaPay is preparing to launch as soon as possible with a mission to offer secure, convenient, and low-cost financial services across borders—positioning us as a leader in inclusive digital banking."
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i + 5}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
        <ProblemSolution />
      </section>
      <Footer />
    </div>
  );
};

export default Mission;
