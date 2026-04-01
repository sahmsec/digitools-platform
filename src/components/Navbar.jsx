import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="flex justify-between navbar bg-base-100 px-10 py-3 shadow-sm">

                {/* Left - Logo */}
                <div className="">
                    <h1 className="text-2xl font-bold text-purple-600">
                        DigiTools
                    </h1>
                </div>

                {/* Center - Links */}
                <div className="hidden lg:flex gap-8 text-gray-600 font-medium">
                    <a className="hover:text-purple-600 cursor-pointer">Products</a>
                    <a className="hover:text-purple-600 cursor-pointer">Features</a>
                    <a className="hover:text-purple-600 cursor-pointer">Pricing</a>
                    <a className="hover:text-purple-600 cursor-pointer">Testimonials</a>
                    <a className="hover:text-purple-600 cursor-pointer">FAQ</a>
                </div>

                {/* Right - Actions */}
                <div className="flex-none flex items-center gap-4">

                    {/* Cart */}
                    <button className="btn btn-ghost text-lg">
                        <ShoppingCart />
                    </button>

                    {/* Login */}
                    <button className="text-gray-600 font-medium hover:text-purple-600">
                        Login
                    </button>

                    {/* Get Started */}
                    <button className="btn bg-purple-600 text-white rounded-full px-5 hover:bg-purple-700">
                        Get Started
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Navbar;