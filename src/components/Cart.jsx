import { useSelector } from "react-redux";
import CartItem from './CartItem.jsx';
import { selectCartCount } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";

function Cart(){
    const cartItems= useSelector((state)=> state.cart);
    const cartItemsCount= useSelector(selectCartCount);
    const subtotal= cartItems.reduce((sum, item)=> sum+item.price* item.quantity, 0);
    const shipping= 0;
    const total= subtotal+shipping;

    return(
        <div className="mt-20 min-h-screen w-full px-4 md:px-16">
            {
                cartItems.length===0? (
                    <div className="text-center text-2xl font-semibold pt-12">Your cart is empty!</div>
                ): (
                    <div className="flex flex-col gap-4 my-24 ">
                        {/* Shopping Cart Items */}
                        <div className="border p-4 md:p-8">
                            <div className="font-bold text-2xl md:text-3xl pb-4">Your Shopping Cart</div>
                            {cartItems.map((item)=> (
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="flex flex-col items-center md:items-end p-4 md:p-8 border ">
                            <h1 className="font-bold text-lg md:text-xl mb-4">
                                Order Summary {`(${cartItemsCount} items)`}
                            </h1>
                            
                            <div className="flex justify-between w-full max-w-md my-2 pb-2 border-b">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between w-full max-w-md my-2 pb-2 border-b">
                                <span>Shipping:</span>
                                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between w-full max-w-md my-2 font-bold text-xl">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="bg-green-500 p-2 md:w-56 rounded-md mt-4 font-semibold text-lg text-white hover:bg-green-600">
                                <Link to="/checkout">
                                    Proceed to CheckOut
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Cart;