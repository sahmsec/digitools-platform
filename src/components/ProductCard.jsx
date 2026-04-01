import React, { useState } from 'react';
import { Check } from "lucide-react";
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {

    const [added, setAdded] = useState(false);

    const { name, description, price, period, tag, icon, features, tagType } = product;

    const tagStyles = {
        popular: "bg-purple-100 text-purple-700",
        new: "bg-green-100 text-green-700",
        bestseller: "bg-orange-100 text-orange-600",
    };

    const handleAddToCart = () => {

        const isFound = carts.find(item => item.id === product.id);

        if (isFound) {
            toast.error(product.name + " already added!");
            return;
        }

        setCarts([...carts, product]);
        setAdded(true);
        toast.success(product.name + " added!");
    };


    return (
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">

            {/* Top */}
            <div className="flex justify-between items-center">

                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={icon} className="w-6 h-6" />
                </div>

                <span
                    className={`text-xs px-3 py-1 rounded-full
                         ${tagStyles[tag.toLowerCase()]
                        || "bg-gray-100 text-gray-600"
                        }`}
                >
                    {tagType}
                </span>

            </div>

            {/* Title */}
            <h3 className="mt-5 font-bold text-xl text-gray-800">
                {name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
                {description}
            </p>

            {/* Price */}
            <p className="mt-4 text-2xl font-bold text-gray-900">
                ${price}
                <span className="text-sm text-gray-500 font-normal">/{period}</span>
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {
                    features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" />
                            {f}
                        </li>
                    ))
                }
            </ul>

            {/* Button */}
            <button
                onClick={handleAddToCart}
                className="mt-6 w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition"
            >
                {added ? "Added" : "Buy Now"}
            </button>

        </div>
    );
};

export default ProductCard;