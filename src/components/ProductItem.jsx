import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function ProductItem({product}){
    const dispatch= useDispatch();

    const handleAddToCart=()=>{
        dispatch(addToCart(product));
    };

    return(
        <div className="w-full">
            <div className="flex flex-col items-center text-center rounded  mb-8  py-2 border border-gray-200">
                <Link to={`/product/${product.id}`} className="hover:scale-105">
                    <img src={product.images[0]} alt={product.title} className="w-60 sm:h-60 h-52 shadow-xl shadow-gray-300 rounded "/>
                    <div className="rounded-b-xl p-2 sm:h-20 h-24">
                        <h2 className="text-sm font-medium">{product.title}</h2>
                        <p className="text-base">${product.price}</p>
                    </div>
                </Link>
                
                <button onClick={handleAddToCart} 
                    className="bg-pink-800 hover:bg-pink-900 text-white p-2 font-medium rounded-full w-32">
                        Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductItem;