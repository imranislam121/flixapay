'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface Service {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    revenuePercentage: number;
    imageUrl: string;
}

const servicesData: Service[] = [
    {
        title: 'Cross-border Payments',
        description: 'Our Cross-Border Payments solution provides individuals and businesses with an efficient and cost-effective way to send and receive funds globally.',
        features: [
            'Real-time payment processing',
            'Low transaction fees',
            'Competitive exchange rates',
            'Wide geographic coverage',
        ],
        benefits: [
            'Quick and seamless global money transfers',
            'Affordable cross-border payments',
            'Minimized financial risk with transparent rates',
            'Easy and convenient payment tracking',
        ],
        revenuePercentage: 20,
        imageUrl: '/services/cross-platform.png',
    },
    {
        title: 'Digital Wallets and Currency Support',
        description: 'Our Digital Wallets solution allows seamless transactions, global money transfers, and real-time currency exchange, all in one secure platform.',
        features: [
            'Multi-currency support',
            'Instant currency conversion',
            'User-friendly interface',
            'Secure and encrypted transactions',
        ],
        benefits: [
            'Manage multiple currencies in one wallet',
            'Instant and secure transactions worldwide',
            'Competitive exchange rates to save money',
            'Convenient access anytime, anywhere',
        ],
        revenuePercentage: 10,
        imageUrl: '/services/wallet.jpg',
    },
    {
        title: 'Micro-loans',
        description: 'Our Micro-Loans service offers small loans to individuals and small businesses who might not qualify for traditional credit.',
        features: [
            'Quick loan approval process',
            'Flexible repayment options',
            'Low interest rates',
            'Accessible to underserved populations',
        ],
        benefits: [
            'Fast financial relief for urgent needs',
            'Affordable and manageable repayment terms',
            'Empowerment for small businesses',
            'Support for underserved and underbanked communities',
        ],
        revenuePercentage: 10,
        imageUrl: '/services/micro-loans.jpg',
    },
    {
        title: 'Mobile Money',
        description: 'Mobile Money allows users to transfer money, pay bills, and make purchases directly from their mobile phones.',
        features: [
            'Direct mobile payments',
            'Bill payments and top-ups',
            'Integration with existing bank accounts',
            'Low transaction fees',
        ],
        benefits: [
            'Convenient and accessible financial management',
            'Quick and secure mobile transactions',
            'Enhanced financial inclusion for unbanked individuals',
            'Affordable way to make payments and transfers',
        ],
        revenuePercentage: 10,
        imageUrl: '/services/mobile-money.jpg',
    },
    {
        title: 'B2B POS Terminals',
        description: 'Our B2B POS Terminals support a variety of payment methods including credit cards, contactless payments, and digital wallets.',
        features: [
            'Supports multiple payment methods',
            'Integration with business management systems',
            'Fast transaction processing',
            'Customizable features for business needs',
        ],
        benefits: [
            'Streamlined payment processing for businesses',
            'Enhanced customer satisfaction with multiple payment options',
            'Reduced transaction times for improved business efficiency',
            'Secure and reliable transactions',
        ],
        revenuePercentage: 30,
        imageUrl: '/services/pos-terminali.jpg',
    },
    {
        title: 'B2C Underserved Communities Globally - Remittance',
        description: 'Our B2C Remittance service enables individuals in underserved communities to send and receive money across borders.',
        features: [
            'Affordable transaction fees',
            'Global remittance coverage',
            'Fast money transfer processing',
            'User-friendly remittance interface',
        ],
        benefits: [
            'Affordable cross-border remittances for underserved communities',
            'Quick and reliable transfers to family and friends',
            'Accessible to individuals without access to traditional banking',
            'Secure and trustworthy remittance service',
        ],
        revenuePercentage: 20,
        imageUrl: '/services/remmitence.jpg',
    }
];

const LongPage = () => {
    return (
        <div className="bg-pink-50">
            <Header />
            <div className="container mx-auto px-4 pt-64 md:pt-40 lg:pt-48">
                <motion.h1
                    className="text-4xl font-semibold text-center mb-6 text-pink-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Comprehensive Financial Solutions
                </motion.h1>

                <motion.p
                    className="text-lg text-center mb-12 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    We provide innovative financial products designed to meet the diverse needs of our global customers. Our services aim to make financial transactions seamless, cost-effective, and accessible for everyone.
                </motion.p>

                {servicesData.map((service, index) => (
                    <motion.section
                        key={index}
                        className="bg-white shadow-lg rounded-lg mb-10 p-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <motion.img
                                src={service.imageUrl}
                                alt={service.title}
                                className="w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                            <div className="flex-1">
                                <motion.h2
                                    className="text-3xl font-semibold text-pink-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    {service.title}
                                </motion.h2>

                                <motion.p
                                    className="text-lg text-gray-800 mt-4 mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.6 }}
                                >
                                    {service.description}
                                </motion.p>

                                <motion.h3
                                    className="text-2xl font-medium text-gray-700"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.7 }}
                                >
                                    Key Features
                                </motion.h3>
                                <ul className="list-disc pl-6 mt-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="text-gray-600">{feature}</li>
                                    ))}
                                </ul>

                                <motion.h3
                                    className="text-2xl font-medium text-gray-700 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.8 }}
                                >
                                    Benefits
                                </motion.h3>
                                <ul className="list-disc pl-6 mt-2">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="text-gray-600">{benefit}</li>
                                    ))}
                                </ul>

                                <motion.h3
                                    className="text-2xl font-medium text-gray-700 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.9 }}
                                >

                                </motion.h3>

                            </div>
                        </div>
                    </motion.section>
                ))}

                <footer className="text-center py-6 bg-pink-100">
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        Contact us to learn more about how our services can benefit you or your business. We are dedicated to making financial services accessible and efficient for everyone, everywhere.
                    </motion.p>
                </footer>
            </div>
            <Footer />
        </div>
    );
};

export default LongPage;
