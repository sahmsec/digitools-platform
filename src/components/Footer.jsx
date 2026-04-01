import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-[#0B1B33] text-gray-400 px-6 md:px-10 py-16">
            <footer className="max-w-7xl px-10 mx-auto">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

                    {/* Logo */}
                    <div>
                        <h2 className="text-3xl font-semibold text-white">DigiTools</h2>
                        <p className="mt-4 text-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-500 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Social Links</h3>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <FaInstagram />
                            </div>
                            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <FaFacebookF />
                            </div>
                            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <FaTwitter />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

                    <p className="text-gray-500">
                        © 2026 DigiTools. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 text-gray-500">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition">Cookies</span>
                    </div>

                </div>

            </footer>
        </section>
    );
};

export default Footer;