'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    const services = [
        {
            title: "Cash Management",
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
    return (
        <div className="pt-20">
            <section>
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
            <section className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16 px-6 md:px-20">
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

        </div>
    );
}
