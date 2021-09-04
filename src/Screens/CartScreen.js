import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import Error from '../components/Error';

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty= props.location.search ? Number(props.location.search.split("=")[1]): 1;
    const dispatch = useDispatch()

    const addCart = useSelector((state)=>{
        return state.cart
    })

    const {cartItems}= addCart;


    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[dispatch, productId, qty])

    const removeFromCartHandler =(id)=>{
        dispatch(removeFromCart(id))
    }

    const checkOutHandler=()=>{
        // procced to payment 
        props.history.push(`/signIn?redirect=shipping`)
    }

    return (
       <div className="row top">
           <div className="col-2">
               <h1>Shoping Cart</h1>

               {
                   cartItems.length === 0 ? <Error> cart is Empty <Link to="/">Go To Shopping</Link></Error>:
                   (
                       <ul>
                           {
                               cartItems.map((item)=>(
                                   <li key={item.product}>
                                       <div className="row top">
                                           <div >
                                               <img src={item.image} alt={item.name} className="small"/>
                                           </div>
                                           <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                           </div>
                                           <div >
                                               <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value))
                                                )}>
                                               {
                                                        [...Array(item.countInStock).keys()].map((x)=>(<option key={x + 1} value={x+ 1}>{x + 1}</option>))
                                                    }
                                               </select>
                                           </div>
                                           <div>
                                               {item.price}
                                           </div>
                                           <div>
                                               <button type="button" onClick={()=>removeFromCartHandler(item.product)}>Delete</button>
                                           </div>
                                       </div>
                                   </li>
                               ))
                           }
                       </ul>
                   )
               }
           </div>
           <div className="col-1">
                <div className="cart cart-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a,c)=> a + c.qty, 0 )} items) : ${ cartItems.reduce((a,c)=>a+c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkOutHandler} className="primary block" disabled={cartItems.length === 0}>Procced to Checkout</button>
                        </li>
                    </ul>
                </div>   
            </div>
       </div>
    );
};

export default CartScreen;