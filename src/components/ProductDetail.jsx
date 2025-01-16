import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { updateQuantity } from "../utils/cartSlice";
import { useState } from "react";


function ProductDetail(){
    const { id } = useParams();
    const dispatch= useDispatch();
    const cart= useSelector((state)=> state.cart);
    const cartItem= cart.find((item)=> item.id=== parseInt(id));
    const { data: product, error, loading } = useFetch(`https://dummyjson.com/products/${id}`);
    const [quantity, setQuantity]= useState(cartItem? cartItem.quantity:1); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error in loading product details.</div>;
    

    const handleQuantityChange = (operation) => {
        if (operation === "increment") {
            setQuantity(quantity + 1);
        } else if (operation === "decrement" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (cartItem) {
            // Update quantity in cart if the item already exists
            dispatch(updateQuantity({ id: product.id, quantity }));
        } else {
            // Add new item to cart with current quantity
            dispatch(addToCart({ ...product, quantity }));
        }
    };

    return(
        <div className="min-h-screen w-full flex flex-wrap  justify-center gap-5 px-4 pb-8 pt-32 md:gap-20 lg:px-16">
            {/* Product Image */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-4/12">
                <img src={product.images[0]} alt={product.title} 
                    className="w-full h-aut0 max-h-96 object-contain shadow-xl shadow-orange-200 bg-orange-100 rounded-lg" 
                />
             </div>

             {/* Product Details */}
            <div className="flex flex-col gap-5 p-3 pt-0 rounded-md w-full sm:w-2/3 md:w-1/2 lg:w-5/12 ">
                <h1 className="text-3xl md:text-4xl font-bold ">{product.title}</h1>
                <p className="text-gray-700 mt-2 text-sm sm:text-base md:text-lg">{product.description}</p>
                <p className="text-lg sm:text-xl font-semibold">${product.price}</p>
                <p className="text-base sm:text-lg">Ratings: {product.rating}⭐</p>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center">
                        <button onClick={()=>handleQuantityChange("decrement")}
                            className="cursor-pointer text-base sm:text-lg font-bold border border-gray-300 px-3 py-1" 
                        >
                            -
                        </button>
                        <span className="text-base sm:text-lg font-bold border border-gray-300 px-3 py-1">
                            {quantity}
                        </span>
                        <button onClick={()=>handleQuantityChange("increment")}
                            className="cursor-pointer text-base sm:text-lg font-bold border border-gray-300 px-3 py-1"
                        >
                            +
                        </button>
                    </div>

                    <button onClick={handleAddToCart} 
                        className="bg-pink-800 hover:bg-pink-900 text-white text-sm sm:text-base p-2 font-medium rounded-md">
                            ADD TO CART
                    </button>
                </div>
                <Link to="/" className="text-blue-600 text-sm sm:text-lg hover:underline">Back to Home</Link>
            </div>
        </div>
    )
}

export default ProductDetail;
