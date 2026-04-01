import React, { use, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsSection = ({ productPromise, carts, setCarts }) => {

    const [activeTab, setActiveTab] = useState("products");
    const products = use(productPromise);


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

            {/* card renders here */}

            {
                activeTab === "products" && (
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
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