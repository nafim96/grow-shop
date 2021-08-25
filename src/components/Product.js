import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
    return (
        <div  className="card">
            <Link to={`/product/${product._id}`}><img className="medium" src={product.image} alt="product" /></Link>            
            <div className="card-body">
              <Link to={`/product${product._id}`}><h2>{product.name}</h2></Link>
              <b>{product.category}</b>
              <p>{product.description}</p>
              <Rating key={product._id} rating={product.rating} numReview={product.numReview}/>
              <div className="price">${product.price}</div>
            </div>
          </div>
    );
};

export default Product;