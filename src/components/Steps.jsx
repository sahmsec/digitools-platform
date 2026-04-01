import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
    {
        id: "01",
        icon: userIcon,
        title: "Create Account",
        desc: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
        id: "02",
        icon: packageIcon,
        title: "Choose Products",
        desc: "Browse our catalog and select the tools that fit your needs.",
    },
    {
        id: "03",
        icon: rocketIcon,
        title: "Start Creating",
        desc: "Download and start using your premium tools immediately.",
    },
];

const Steps = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-10">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-extrabold text-gray-900">
                        Get Started In 3 Steps
                    </h2>
                    <p className="mt-3 text-gray-500">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative bg-white rounded-2xl p-15 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >

                            {/* Step number */}
                            <div className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                                {step.id}
                            </div>

                            {/* Icon */}
                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <img src={step.icon} alt={step.title} className="w-10 h-10" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-md text-gray-500">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Steps;