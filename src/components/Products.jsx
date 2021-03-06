import React from 'react';
import {useSelector} from "react-redux";
import Product from "./Product";
import Title from "./Title.jsx"

function Products() {
  const products = useSelector(state => state.productsReducer.products);
  return (
    <div className="py-5">
      <div className="container">
          <Title name="our" title="cars"/>
          <div className ="row">
               { products.map(product => {
                  return <Product key={product.id} product={product}/>
                })
              }
          </div>
      </div> 
    </div>
    
  );
}

export default Products;
