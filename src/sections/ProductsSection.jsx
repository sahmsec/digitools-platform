import React, { use, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const ProductsSection = ({ carts, setCarts, activeTab, setActiveTab, productPromise }) => {

    // const [activeTab, setActiveTab] = useState("products");

    const products = use(productPromise);


    return (
        <div className="max-w-7xl mx-auto px-10 py-16">

            {/* Heading */}
            <div className="text-center max-w-xl mx-auto">
                <h2 className="text-5xl font-extrabold">
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
                    className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 checked:text-white"
                    aria-label="Products"
                    checked={activeTab === "products"}
                    onChange={() => setActiveTab("products")}
                />

                <input
                    type="radio"
                    name="tabs"
                    className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 checked:text-white"
                    aria-label={`Cart(${carts.length})`}
                    checked={activeTab === "cart"}
                    onChange={() => setActiveTab("cart")}
                />
            </div>

            {/* card renders here */}

            {
                activeTab === "products" && (
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {
                            products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    carts={carts}
                                    setCarts={setCarts} />
                            ))
                        }
                    </div>
                )
            }

            {/* cart renders here */}

            {
                activeTab === "cart" && (
                    <Cart carts={carts} setCarts={setCarts} />
                )
            }

        </div>
    );
};

export default ProductsSection;