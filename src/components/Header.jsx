import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo3.webp';
import cart from '../assets/cart8.png';
import { useSelector } from "react-redux";
import { selectCartCount } from "../utils/cartSlice";

function Header(){
    const cartItemsCount= useSelector(selectCartCount);

    return(
        <header className="fixed top-0 left-0 w-full z-10 bg-red-900 text-white">
            <nav className="flex justify-between items-center px-4 md:px-16 py-3 space-x-2">
                {/* Logo Section */}
                <div className="flex items-center md:gap-3">
                    <img src={logo} alt="Shoppy Globe" className="w-7 h-7 md:w-10 md:h-10"/>
                    <Link to="/" className="font-bold font-serif text-sm md:text-xl hover:text-gray-300 whitespace-nowrap">Shoppy Globe </Link>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex gap-3 md:gap-6 text-sm md:text-base lg:text-lg">
                        <li className="hover:text-gray-300">
                            <Link to="/" className="font-serif">Home</Link>
                        </li>
                        <li className="hover:text-gray-300">
                            <Link to="/productlist" className="font-serif">Shop</Link>
                        </li>
                        <li className="hover:text-gray-300">
                            <Link to="/" className="font-serif">About</Link>
                        </li>
                    </ul>
                </div>

                {/* Cart Section */}
                <div className="relative flex items-center">
                    <Link to="/cart" className="flex items-center">
                        <img src={cart} alt="Cart" className="w-8 h-8 md:w-10 md:h-10" />
                        {cartItemsCount>0 && (
                            <span className="absolute top-0 left-7 bg-red-600 text-white text-xs font-bold w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full">
                                {cartItemsCount}
                            </span>
                        )}
                    </Link>
                </div>
           </nav>
        </header>
    )
}

export default Header;