import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ carts, setActiveTab }) => {
    return (
        <div className='sticky top-0 bg-white py-5'>
            <div className="flex justify-between navbar bg-base-100 px-5  max-w-7xl mx-auto my-2 ">

                {/* Left - Logo */}
                <div className="">
                    <p className="btn btn-ghost text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </p>
                </div>

                {/* Center - Links */}
                <div className="hidden lg:flex gap-8 text-gray-600 font-medium">
                    <a className="hover:text-purple-600 cursor-pointer" href='#'>Features</a>
                    <a className="hover:text-purple-600 cursor-pointer" href='#'>Pricing</a>
                    <a className="hover:text-purple-600 cursor-pointer" href='#'>Testimonials</a>
                    <a className="hover:text-purple-600 cursor-pointer" href='#'>Products</a>
                    <a className="hover:text-purple-600 cursor-pointer" href='#'>FAQ</a>
                </div>

                {/* Right - Actions */}
                <div className="flex-none flex items-center gap-4">

                    {/* Cart */}
                    <div className="indicator">

                        {
                            carts.length > 0 && (
                                <span className="indicator-item badge badge-error w-1 text-white text-xs">
                                    {carts.length}
                                </span>
                            )
                        }

                        <button
                            onClick={() => setActiveTab("cart")}
                            className="btn btn-ghost btn-circle"
                        >
                            <ShoppingCart size={20} />
                        </button>

                    </div>

                    {/* Login */}
                    <button className="text-gray-600 font-medium hover:text-purple-600">
                        Login
                    </button>

                    {/* Get Started */}
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-5">
                        Get Started
                    </button>

                </div>

            </div>
            <hr className="border-none h-px bg-gray-500/30 mt-5" />
        </div>
    );
};

export default Navbar;