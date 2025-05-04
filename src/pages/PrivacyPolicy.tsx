import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="">
            <Header />
            <div className="max-w-4xl mx-auto px-4 pt-64 md:pt-40 lg:pt-48 text-gray-800 pb-10">
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

                <p className="mb-6">
                    At Flixapay, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your data.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We collect personal and business information provided directly by users, such as name, email, payment details, and service preferences. We may also collect technical data including IP address, browser type, and device information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
                <p className="mb-4">
                    We use the collected data to provide and improve our services, process transactions, communicate with users, and comply with legal obligations.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compliance and Regulation</h2>
                <p className="mb-4">
                    We operate electronic money services across multiple regions. For any services extended to Australia, we strictly adhere to AUSTRAC regulations and have obtained the Australian Financial Services License (AFSL). Compliance with these and other applicable regulatory frameworks ensures the legality and security of our services, building trust among our clients.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We implement robust technical and organizational measures to safeguard your information from unauthorized access, disclosure, or loss.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
                <p className="mb-4">
                    We may use third-party providers to facilitate payment processing, analytics, or customer service. These providers are obligated to protect your data in accordance with applicable laws.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, or delete your personal data. You may also object to or restrict our processing activities as permitted by law.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Email].
                </p>

                <p className="mt-10 text-sm text-gray-500">Last updated: 01/01/2025</p>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
