import {  ADD_CART_SUCCESS, REMOVE_ITEM_SECCESS } from "../constants/cartConstants";
import items from "../data"

export const addToCart=(id,image)=>(dispatch,getState)=>{
    const data= items.find(x=> x.id==id);
    dispatch({type:ADD_CART_SUCCESS,payload:{...data,image1:image,qty:1}});
    localStorage.setItem("cartItems",JSON.stringify(getState().cartItems));
}
export const removeFromCart=(id,image)=>(dispatch,getState)=>{
    dispatch({
        type: REMOVE_ITEM_SECCESS,
        payload: {id,image}
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cartItems));
}