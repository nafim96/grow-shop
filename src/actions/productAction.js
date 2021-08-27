import Axios from "axios"
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"



export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get("http://localhost:5000/api/product")
        
        dispatch({type:PRODUCT_LIST_SUCCESS, payload: data.product})
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const detailProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAIL_REQUEST,
        payload: productId
    })

    try {
         const { data } = await Axios.get(`http://localhost:5000/api/product/${productId}`)
        dispatch({type:PRODUCT_DETAIL_SUCCESS, payload:data.product})
    } catch (error) {
        dispatch({ type:PRODUCT_DETAIL_FAIL, payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

