import { Dot } from 'lucide-react';
import React from 'react';

const CTASection = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 text-center text-white">

            <h2 className="text-3xl font-bold">
                Ready To Your Workflow?
            </h2>

            <p className="mt-3 text-sm opacity-80 max-w-xl mx-auto">
                Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-4">

                <button className="btn px-6 py-2 rounded-full bg-white text-purple-600 font-medium">
                    Explore Products
                </button>

                <button className="btn bg-transparent text-white px-6 py-2 rounded-full border border-white">
                    View Pricing
                </button>

            </div>

            {/* Bottom text */}
            <p className="mt-4 text-xs opacity-70 flex items-center justify-center gap-2 flex-wrap">
                <span className="flex items-center">
                    14-day free trial
                </span>

                <Dot size={16} />

                <span className="flex items-center">
                    No credit card required
                </span>

                <Dot size={16} />

                <span className="flex items-center">
                    Cancel anytime
                </span>
            </p>

        </div>
    );
};

export default CTASection;