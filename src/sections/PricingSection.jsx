import React, { use } from 'react';
import { Check } from "lucide-react";
import PricingCard from '../components/PricingCard';

const PricingSection = ({ pricingPromise }) => {

    const plans = use(pricingPromise);

    return (
        <div className="max-w-7xl mx-auto px-10 py-16">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-5xl font-extrabold mb-8">
                    Simple, Transparent Pricing
                </h2>
                <p className='mt-3 text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* Cards renders here */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

                {
                    plans.map(plan => (

                        <PricingCard key={plan.id} plan={plan} />
                    ))
                }

            </div>

        </div>
    );
};

export default PricingSection;