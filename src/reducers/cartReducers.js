import { ADD_CART_FAIL, ADD_CART_SUCCESS, REMOVE_ITEM_SECCESS } from "../constants/cartConstants"

const initialState={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}
const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_CART_SUCCESS:
            const item=action.payload;
            const existing=state.cartItems.find((x) => x.id === item.id);
            if(existing && existing.image1===item.image1){
                return{
                    ...state,
                    cartItems:state.cartItems.map((x) => x.product===existing.product?{...item,qty:existing.qty+1}:x)
                };
            } else {
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                };
            }
        case REMOVE_ITEM_SECCESS:
            const {id,image} =action.payload;
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.id!=id || x.image1!=image)
            }
        default: return state
    }
}
export default cartReducer