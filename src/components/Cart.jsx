import React from 'react';
import { ShoppingCart, Trash2 } from "lucide-react";
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const handleRemove = (id) => {
        const updated = carts.filter(item => item.id !== id);
        setCarts(updated);
    };

    const handleCheckout = () => {
        setCarts([]);
        toast.success("Checkout success!");
    };

    const total = carts.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="mt-10 bg-gray-100 p-6 rounded-xl">

            <h2 className="font-semibold mb-6">Your Cart</h2>

            {
                carts.length === 0 ? (

                    <div className="text-center py-10 text-gray-400 flex flex-col items-center">

                        <ShoppingCart size={40} className="mb-2" />

                        <p>Your cart is empty</p>

                    </div>

                ) : (

                    <>
                        {/* Items */}
                        <div className="space-y-4">

                            {
                                carts.map(item => (
                                    <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg">

                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} className="w-10 h-10" />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">${item.price}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-red-500 text-sm flex items-center gap-1"
                                        >
                                            <Trash2 size={16} /> Remove
                                        </button>

                                    </div>
                                ))
                            }

                        </div>

                        {/* Total */}
                        <div className="flex justify-between mt-6 text-gray-700 mx-3">
                            <span>Total:</span>
                            <span className="font-bold">${total}</span>
                        </div>

                        {/* Checkout */}
                        <button
                            onClick={handleCheckout}
                            className="mt-6 w-full py-3 rounded-full text-white bg-linear-to-r from-purple-600 to-purple-500"
                        >
                            Proceed To Checkout
                        </button>
                    </>
                )
            }

        </div>
    );
};

export default Cart;