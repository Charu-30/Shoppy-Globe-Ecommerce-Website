import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addToCart: (state, action)=>{
            const existingItem= state.find((item)=> item.id===action.payload.id);
            if(existingItem){
                existingItem.quantity+=1;
            }else{
                state.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action)=>{
            return state.filter((item)=>item.id!==action.payload);
        },
        updateQuantity: (state, action)=>{
            const {id, quantity}= action.payload;
            const existingItem= state.find((item)=> item.id===id);
            if(existingItem){
                existingItem.quantity=quantity;
            }
        }
    }
});

export const {addToCart, removeFromCart, updateQuantity}= cartSlice.actions;

export const selectCartCount =(state)=>{
    return state.cart.reduce((total,item)=> total+item.quantity, 0);
}

export default cartSlice.reducer;