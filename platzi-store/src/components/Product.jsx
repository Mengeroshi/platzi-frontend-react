import React from 'react';

const Product = ({ product, id, handleAddToCart  }) => {
  const productObj ={
    id: id,
    title: product.title,
    image: `http://localhost:3006${product.image.data[0].attributes.url}`,
    price: product.price,
    description: product.description,
  }

  return (
    <div className="Products-item">
      <img src={productObj.image} alt={product.title} />
      <div className="Product-Item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <span>{product.description}</span>
      </div>
      <button type="button" onClick={() => handleAddToCart(productObj)}>
        Comprar
      </button>
    </div>
  );
};

export { Product };
