// components/DigitalServices.tsx
import React from "react";

export default function DigitalServices() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Our Digital Financial Services</h2>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">For Individuals</h3>
          <p className="text-gray-700 mb-4">
            FlixaPay offers low-cost, real-time cross-border payments, digital wallets with multi-currency support,
            micro-loans, and an intuitive mobile app with rewards. Prices range between <strong>$200–$800</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">For Businesses</h3>
          <p className="text-gray-700 mb-4">
            We provide payroll solutions, multi-currency accounts, PoS systems, and transaction tools — all competitively priced to maximize value and efficiency.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Subscriptions</h3>
          <p className="text-gray-700 mb-4">
            Our subscription plans offer flexibility, discounts, and recurring access to premium services — enhancing customer loyalty and affordability.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Gross Margins</h3>
          <p className="text-gray-700 mb-4">
            We project a <strong>gross profit margin of 87%</strong> due to strategic pricing and our fully digital model, which minimizes infrastructure costs.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Delivery Model</h3>
          <p className="text-gray-700 mb-4">
            Free digital delivery on orders above <strong>$5,000</strong>. Our platform supports real-time operations and cost-effective financial service delivery across markets.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Guarantees, Warranties & Refunds</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>30-day satisfaction guarantee with free premium upgrade.</li>
            <li>1-year technical warranty with optional extensions.</li>
            <li>Refunds available for service disruptions over 24 hours.</li>
            <li>Full PCI DSS compliance and consumer protection adherence.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Future Development</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Q3 2026:</strong> Enhanced security & redesigned mobile app UI</li>
            <li><strong>Q4 2026:</strong> Upgraded B2B PoS terminals with analytics</li>
            <li><strong>Q3 2026:</strong> Launch of Subscription Billing, Embedded Finance, and Earned Wage Access (EWA)</li>
            <li><strong>Q2 2027:</strong> Contactless Cash Machines with national ATM integration</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
