import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

const ProductScreen = (props) => {
    const product = data.product.find(x=> x._id=== props.match.params.id)
    if(!product){
        return <div> Product Not Found</div>
    }
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} className="medium" alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{ product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReview={product.numReview} />
                        </li>
                        <li>
                            Price: {product.price}
                        </li>
        
                        <li>
                            <p>Description: {product.description }</p>
                        </li>

                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row top">
                                    <div>Price</div>
                                    <div className="price">${ product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row top">
                                    <div>Status: </div>
                                    <div>
                                        {product.countInStock > 0 ? <span className="success"> In Stock</span> : <span className="error"> Unavailable</span>}
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