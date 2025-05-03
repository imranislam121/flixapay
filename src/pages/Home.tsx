'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="pt-12">
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
            <section className="min-h-screen bg-gradient-to-br from-[#1d8b92] via-[#2f2f72] to-[#2f2f72] text-white px-6 py-16 flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">

                    {/* Text Content */}
                    <motion.div
                        className="max-w-xl text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-futura font-thin">
                            Personal Banking
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl font-thin font-futura mb-8">
                            Flixapay Personal Banking is designed to empower individuals with seamless, secure, and innovative financial tools. Whether you're managing everyday expenses, saving for your future, or making international transactions, Flixapay offers personalized solutions with no hidden fees, intuitive mobile access, and round-the-clock support. Experience banking that revolves around your lifestyle, putting simplicity and convenience at your fingertips.
                        </p>


                    </motion.div>

                    {/* Phone Mockup with Caption */}
                    <motion.div
                        className="block justify-center lg:justify-end w-full max-w-md relative"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                       <div className=" justify-between">
                       <img
                            src="https://static.wixstatic.com/media/200884_7ec9339feb004ad8b86ad8f4a9b82d49~mv2.png/v1/fill/w_599,h_600,al_c,q_85,enc_avif,quality_auto/200884_7ec9339feb004ad8b86ad8f4a9b82d49~mv2.png"
                            alt="App Preview"
                            className="w-full  h-auto object-contain"
                        />
                        <div className=" ">
                            <p className="absolute bottom-24 right-0 text-sm md:text-base lg:text-lg underline font-futura max-w-xs">
                                "One small swipe for you,<br />
                                One giant leap for your finances!"
                            </p>
                        </div>
                       </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
