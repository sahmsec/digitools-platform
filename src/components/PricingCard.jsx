import React from 'react';
import { Check } from "lucide-react";

const PricingCard = ({ plan }) => {

    return (
        <div
            className={`p-6 rounded-xl aspect-3.5/4 flex flex-col ${plan.type === "highlight"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white relative"
                : "border-gray-500/50 bg-gray-100"
                }`}
        >
            {/* Badge */}
            {plan.type === "highlight" && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
                    Most Popular
                </span>
            )}

            {/* Top Content */}
            <div>
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <p className="text-sm mt-1 opacity-80">{plan.description}</p>

                <p className="mt-4 text-3xl font-bold">
                    ${plan.price}
                    <span className="text-sm">/{plan.period}</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                    {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                            <Check size={16} /> {f}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Button */}
            <button
                className={`mt-auto w-full py-3 rounded-full ${plan.type === "highlight"
                    ? "bg-white text-purple-600"
                    : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    }`}
            >
                {plan.button}
            </button>
        </div>
    );
};

export default PricingCard;