import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-Item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <span>{product.description}</span>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        {' '}
        Comprar
      </button>
    </div>
  );
};

export { Product };
