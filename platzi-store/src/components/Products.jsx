import React from 'react';
import '../styles/components/Products.css';
import { Product } from './Product';
import { AppContext } from '../context/AppContext';

const Products = () => {
  const { products, addToCart } = React.useContext(AppContext);
  

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product.attributes}
              handleAddToCart={handleAddToCart}
              id = {product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Products };
