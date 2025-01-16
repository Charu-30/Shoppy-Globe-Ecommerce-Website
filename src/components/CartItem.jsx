import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItem({item}){
    const dispatch= useDispatch();

    const handleQuantityChange=(newQuantity)=>{
        if(newQuantity>=1){
            dispatch(updateQuantity({id: item.id, quantity: newQuantity}));
        }
    };

    return(
        <div className="flex justify-around items-center md:py-0 p-4 border rounded shadow">
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0">
                <img src={item.images[0]} alt={item.title} className="w-full h-full object-contain" />
            </div>

            {/* Product Details */}
            <div className="flex flex-wrap">
                <div>
                    <h2 className=" font-semibold md:w-48 w-40 ">{item.title}</h2>
                    <p className="">${item.price}</p>
                </div>
                {/* Quantity Controls */}
                <div className="flex md:gap-28 gap-6 items-center">
                    <div className="flex">
                        <button onClick={()=>handleQuantityChange(item.quantity-1)}
                        className="cursor-pointer text-xl font-bold border border-gray-300 px-3 py-1" 
                        >
                            -
                        </button>
                        <div className="text-xl font-bold border border-gray-300 px-3 py-1">{item.quantity}</div>
                        <button onClick={()=>handleQuantityChange(item.quantity+1)}
                            className="cursor-pointer text-xl font-bold border border-gray-300 px-3 py-1"
                        >
                            +
                        </button>
                    </div>
                        
                    <button onClick={()=> dispatch(removeFromCart(item.id))}
                        className="cursor-pointer text-red-600 hover:text-red-700 text-lg py-3">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;