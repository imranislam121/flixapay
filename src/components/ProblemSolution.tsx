'use client';  
import React from "react";

const ProblemSolution = () => {
  return (
    <div className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-pink-600 mb-12">Problem and Solution</h1>
        
        <div className="space-y-12">
          {/* Problem 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600">Limited Access to Affordable Financial Services</h2>
            <p className="text-gray-700 mt-4">
              Many potential customers, especially in underserved and underbanked communities across both emerging and developed markets, face significant barriers in accessing affordable and efficient financial services. This limitation curtails their economic potential and financial inclusion.
            </p>
            <h3 className="mt-6 text-xl font-medium text-pink-600">Solution:</h3>
            <p className="text-gray-700 mt-2">
              Flixapay's digital financial platform is designed to bridge this gap by offering low-cost, real-time cross-border payments and digital wallets with multi-currency support. In addition, we provide micro-loans to individuals without access to traditional banking, enabling them to meet urgent financial needs and improve their financial stability.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600">High Costs and Delays in Cross-Border Payments</h2>
            <p className="text-gray-700 mt-4">
              Customers often experience excessive fees and long processing times when transferring money internationally, leading to financial inefficiencies and frustration.
            </p>
            <h3 className="mt-6 text-xl font-medium text-pink-600">Solution:</h3>
            <p className="text-gray-700 mt-2">
              Flixapay solves this by offering real-time, low-cost international money transfers. Our multi-currency digital wallets streamline the process, eliminating unnecessary costs and delays. Both individuals and businesses benefit from fast, secure, and seamless global transactions.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600">Inefficient and Disconnected Point-of-Sale Systems</h2>
            <p className="text-gray-700 mt-4">
              Businesses frequently struggle with fragmented PoS systems that lack currency flexibility and real-time capabilities, resulting in slower operations and a poor customer experience.
            </p>
            <h3 className="mt-6 text-xl font-medium text-pink-600">Solution:</h3>
            <p className="text-gray-700 mt-2">
              Our next-generation Point-of-Sale (PoS) system supports multi-currency transactions and real-time processing, helping businesses serve a global customer base efficiently. This reduces operational complexity, improves cash flow, and significantly enhances the in-store experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
