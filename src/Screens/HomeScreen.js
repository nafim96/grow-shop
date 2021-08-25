import React from 'react';
import Product from '../components/Product';
import data from '../data';

const HomeScreen = () => {
    return (
        <div className="row center">
          {
            data.product.map(product=>(
          <Product key={product._id} product={product}/>
            ))
          }
        </div>
    );
};

export default HomeScreen;