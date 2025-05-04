'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    const services = [
        {
            title: "Cash management with cross border payments",
            points: [
                "Named business accounts in 30+ currencies",
                "Receive locally in 20+ countries",
                "Cash back for UK/EU clients (EUR, GBP, USD)",
                "Payout to 196 countries",
                "Open banking integrations",
                "Multi-payment support (100+ currencies)",
                "Local payments in 37+ countries",
                "Invoice control and reconciliation",
                "24/7 in-depth reporting",
                "Escrow services available"
            ],
        },
        {
            title: "Lending",
            points: [
                "Unsecured trade financing (no debentures)",
                "Funding from £50k to £5m",
                "Up to 150 days to repay",
                "Interest from 0.8% per month",
                "Revolving credit line",
                "Zero impact on existing facilities",
                "Cash flow support for company expenses"
            ],
        },
        {
            title: "Foreign Exchange",
            points: [
                "Access to 130+ currencies",
                "Pay and collect in local currencies"
            ],
        },
        {
            title: "Risk Management",
            points: [
                "Custom hedging strategies for market volatility",
                "Up to 7-year flexible forwards",
                "Initial margin credit facilities"
            ],
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 80
            },
        }),
    };
    const posItems = [
        { name: "Android Series", image: "/pos1.jpg" },
        { name: "Smart POS Series", image: "/pos2.jpg" },
        { name: "ES Series", image: "/pos3.jpg" },
        { name: "SP Series", image: "/pos4.jpg" },
        { name: "PA Series", image: "/pos5.jpg" },
        { name: " SD Series", image: "/pos6.jpg" },
    ];
    return (
        <div className="pt-40 md:pt-36 lg:pt-20 font-futura">
            <section className='pt-10'>
                <img src="/banner.jpg" alt="Banner" className="w-full" />
            </section>
            <section className="bg-gradient-to-br min-h-screen from-[#2f2f72] via-[#373a84] to-[#1d8b92] text-white px-4 py-20 flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="max-w-xl text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl  md:text-6xl lg:text-7xl leading-tight mb-6 font-futura font-thin text-left">
                            Empowering Financial Freedom<br />for Individuals and Businesses Everywhere
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-futura text-left">
                            Seamless payments, smarter lending,<br className="hidden md:block" />
                            and innovative financial tools – all in one platform.
                        </p>

                        <div className="flex flex-initial justify-center md:justify-start gap-4 items-center text-center md:text-left">
                            <img src="/play-store.png" alt="Google Play" className="w-36 h-14 hover:scale-105 cursor-pointer" />
                            <img src="/apple-store.png" alt="App Store" className="w-36 h-12 hover:scale-105 cursor-pointer" />
                        </div>
                    </motion.div>

                    {/* Phone UI Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end w-full max-w-lg"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                        <img src="/Photo1.png" alt="App Preview" className="w-full h-auto" />
                    </motion.div>
                </div>
            </section>
            <section className="min-h-screenbg-white text-black px-4 py-16 flex items-center">
                <div className="container mx-auto h-full py-30 flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="max-w-xl text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl  md:text-6xl lg:text-7xl leading-tight mb-6 font-futura font-thin text-left">

                            Revolutionizing
                            Financial
                            Technology
                        </h1>


                        <div className="flex flex-initial justify-center md:justify-start gap-4 items-center text-center md:text-left">
                            <button className='border ml-2 border-[#1d8b92] hover:bg-[#1d8b92] text-black font-futura font-bold py-2 px-6 rounded transition duration-300 ease-in-out'>
                                Preregister
                            </button>
                        </div>
                    </motion.div>

                    {/* Phone UI Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end w-full max-w-lg"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                        <p className="text-lg md:text-sm lg:text-xl mb-8 font-futura text-left">
                            Flixapay is a visionary fintech platform with plans to revolutionize financial access and inclusion for individuals and businesses. The platform delivers a comprehensive suite of services, including multi-currency wallets, real-time cross-border payments, micro-lending, and tailored financial tools for SMEs. Flixapay is integrating innovative solutions such as financial wellness programs to support employees with tools like earned wage access and budgeting resources, alongside revolving credit (BNPL) options designed to empower consumers and businesses with flexible payment plans
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="bg-gradient-to-r font-futura from-indigo-800 to-purple-900 text-white py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-10 text-center"
                    >
                        B2B Financial Solutions Tailored for Growth
                    </motion.h2>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true }}
                                className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-white">
                                    {service.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-pink-50 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-pink-600 mb-10 text-center">
                        POS Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-pink-700">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='pt-32 flex flex-col lg:flex-row font-futura items-center justify-between px-4 lg:px-16 gap-10'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2'>
                    <img src="/MAC-POS.png" alt="MacBook" className='w-full h-auto' />
                </div>

                {/* Text Section */}
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl font-bold mb-4'>Business Banking</h1>
                    <p className='text-lg text-gray-700'>
                        Flixapay Business Banking caters to businesses of all sizes with scalable solutions to meet your financial needs.
                        From streamlined payments and cash flow management to tailored credit and investment options, our platform helps
                        you stay ahead in a fast-paced economy. With advanced analytics, multi-currency capabilities, and enterprise-grade
                        security, Flixapay ensures your business operates smoothly and securely, anywhere in the world.
                    </p>
                </div>
            </section>

            <section className='mx-auto max-w-4xl px-4 py-10 font-futura'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Integrated Payment Systems</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Embedded Financial Tools</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Payroll & Financial Wellness</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>SME Credit Lines</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>PoS Solutions</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Insights & Analytics</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Digital Revolving Credit BNPL</p>
                    </div>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow'>
                        <p className='text-base sm:text-lg md:text-xl font-semibold'>Focus on underserved and under banked communities</p>
                    </div>
                </div>
            </section>




        </div>
    );
}
