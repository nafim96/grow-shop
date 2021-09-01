import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProduct } from '../actions/productAction';
import Error from '../components/Error';
import LoadingBox from '../components/LoadingBox';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
    // const product = data.product.find(x=> x._id=== props.match.params.id)
    const dispatch = useDispatch()
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    console.log(qty);
    const productDetails = useSelector((state) => {
        return state.productDetail
    })
    const {loading,error, products}= productDetails;
    
    useEffect(() => {
        dispatch(detailProduct(productId))
    }, [dispatch, productId])

    const handleAddToCart=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <div>
      {
        loading ? <LoadingBox/> :
        error ? <Error >{error}</Error> :
        <div>
        <Link to="/">Back to result</Link>
        <div className="row top">
            <div className="col-2">
                <img src={products.image} className="medium large" alt={products.name} />
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{ products.name}</h1>
                    </li>
                    <li>
                        <Rating rating={products.rating} numReview={products.numReview} />
                    </li>
                    <li>
                        Price: {products.price}
                    </li>
    
                    <li>
                        <p>Description: {products.description }</p>
                    </li>

                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row top">
                                <div>Price</div>
                                <div className="price">${ products.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row top">
                                <div>Status: </div>
                                <div>
                                    {products.countInStock > 0 ? <span className="success"> In Stock</span> : <span className="error"> Unavailable</span>}
                                </div>
                            </div>
                        </li>
                        {
                            products.countInStock > 0 && (
                                <>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <div>
                                                <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                                    {
                                                        [...Array(products.countInStock).keys()].map((x)=>(<option key={x + 1} value={x+ 1}>{x + 1}</option>))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleAddToCart} className="primary block">Add to Cart</button>
                                    </li>
                                </>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
  </div>
      }
         
      </div>
       
    );
};

export default ProductScreen;