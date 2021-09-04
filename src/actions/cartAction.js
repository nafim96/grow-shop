import Axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart =(productId, qty)=> async(dispatch, getState)=>{
    const data = await Axios.get(`http://localhost:5000/api/product/${productId}`);
        
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.data.name,
            image:data.data.image,
            price:data.data.price,
            countInStock: data.data.countInStock,
            product: data.data._id,
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}