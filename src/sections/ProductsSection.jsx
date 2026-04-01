import React, { useEffect, useState } from 'react';

const ProductsSection = ({ carts, setCarts }) => {

    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("products");


    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-10 py-16">

            {/* Heading */}
            <div className="text-center max-w-xl mx-auto">
                <h2 className="text-3xl font-bold">
                    Premium Digital Tools
                </h2>
                <p className="mt-3 text-gray-500 text-sm">
                    Choose from our curated collection of premium digital products.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box justify-center bg-transparent mt-6">
                <input
                    type="radio"
                    name="tabs"
                    className="tab rounded-full w-40 checked:bg-purple-600 checked:text-white"
                    aria-label="Products"
                    defaultChecked
                    onClick={() => setActiveTab("products")}
                />

                <input
                    type="radio"
                    name="tabs"
                    className="tab rounded-full w-40 checked:bg-purple-600 checked:text-white"
                    aria-label={`Cart(${carts.length})`}
                    onClick={() => setActiveTab("cart")}
                />
            </div>

            {/* Content */}
            {
                activeTab === "products" && (
                    <p className="text-center mt-10">
                        Total Products: {products.length}
                    </p>
                )
            }

            {
                activeTab === "cart" && (
                    <p className="text-center mt-10">
                        Cart items: {carts.length}
                    </p>
                )
            }

        </div>
    );
};

export default ProductsSection;