import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount } from "../utils/cartSlice";

function Checkout() {
    const cartItems = useSelector((state) => state.cart);
    const cartItemsCount = useSelector(selectCartCount);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Billing form state
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        country: "",
        address: "",
        city: "",
        zip: "",
        mobile: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails({ ...billingDetails, [name]: value });
    };

    const handlePlaceOrder = () => {
        if (Object.values(billingDetails).some((value) => value.trim() === "")) {
            alert("Please fill in all billing details.");
            return;
        }

        alert(`Thank you for your order, ${billingDetails.name}!`);
    };

    return (
        <div className="flex flex-col items-center min-h-screen w-full pt-28 pb-6 px-2 md:px-8">
            <div className="">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Checkout</h1>
            </div>
           
           <div>
           {cartItems.length === 0 ? (
                <div className="text-center text-lg font-semibold">
                    Your cart is empty. 
                    <Link to="/" className="text-blue-500 hover:underline">
                        Go shopping!
                    </Link>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-6 md:gap-16 w-full">
                    {/* Billing Details */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">Billing Details</h2>
                        <form className="flex flex-col gap-4 text-lg">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={billingDetails.name}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={billingDetails.email}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                            />
                            <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={billingDetails.country}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={billingDetails.city}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="ZIP Code"
                                    value={billingDetails.zip}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            </div>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={billingDetails.address}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                            />
                            <input
                                type="number"
                                name="mobile"
                                placeholder="Mobile"
                                value={billingDetails.mobile}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                            />
                        </form>
                    </div>
                    {/* Order Summary */}
                    <div className="border border-gray-200 p-4 w-full md:w-96">
                        <h2 className="text-2xl font-semibold mb-4 font-serif">Order Summary</h2>
                        <ul className="divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li key={item.id} className="py-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-gray-500"> Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="text-lg font-semibold">
                                         ${item.price}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="text-right mt-4">
                            <h3 className="text-xl font-semibold pb-2">Total Items: {cartItemsCount}</h3>
                            <h3 className="text-xl font-bold pb-2">Total Price: ${calculateTotalPrice()}</h3>
                        </div>
                        {/* Place Order Button */}
                        <div className="text-right">
                            <button
                                onClick={handlePlaceOrder}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md md:text-xl text-lg"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
           </div> 
        </div>
    );
}

export default Checkout;
