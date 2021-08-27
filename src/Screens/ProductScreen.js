import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductScreen = () => {
    // const product = data.product.find(x=> x._id=== props.match.params.id)
    const productDetails = useSelector((state) => state.productDetail)
    console.log(productDetails);
    if(!productDetails){
        return <div> Product Not Found</div>
    }
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={productDetails.image} className="medium large" alt={productDetails.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{ productDetails.name}</h1>
                        </li>
                        <li>
                            <Rating rating={productDetails.rating} numReview={productDetails.numReview} />
                        </li>
                        <li>
                            Price: {productDetails.price}
                        </li>
        
                        <li>
                            <p>Description: {productDetails.description }</p>
                        </li>

                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row top">
                                    <div>Price</div>
                                    <div className="price">${ productDetails.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row top">
                                    <div>Status: </div>
                                    <div>
                                        {productDetails.countInStock > 0 ? <span className="success"> In Stock</span> : <span className="error"> Unavailable</span>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default ProductScreen;